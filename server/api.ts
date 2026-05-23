import { Router, Request, Response } from 'express';
import { GoogleGenAI, Type } from '@google/genai';
import { v4 as uuidv4 } from 'uuid';
import { SETUP_PROMPT, FOUNDATION_PROMPT, MACRO_OUTLINE_PROMPT, SCENE_CARDS_PROMPT, FINAL_SCRIPT_PROMPT, LINTER_QA_PROMPT } from './prompts.js';
import { ideaSetupSchema, foundationDnaSchema, macroOutlineSchema, sceneCardsSchema, qaSchema } from './schemas.js';

const router = Router();

const baseGuidelines = '';

// Initialize SDK lazily
function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  const useVertex = process.env.GOOGLE_GENAI_USE_VERTEXAI === 'true';
  const project = process.env.GOOGLE_CLOUD_PROJECT || process.env.VERTEX_PROJECT_ID;
  const location = process.env.GOOGLE_CLOUD_LOCATION || process.env.VERTEX_LOCATION || 'global';
  
  console.log("Detecting GenAI Config:");
  console.log(" - GEMINI_API_KEY present:", !!apiKey);
  console.log(" - GOOGLE_GENAI_USE_VERTEXAI:", process.env.GOOGLE_GENAI_USE_VERTEXAI);
  console.log(" - Vertex Project:", project);
  console.log(" - Vertex Location:", location);

  // If useVertex is explicitly requested, or if we don't have an API key but have GCP project info
  if (useVertex || (!apiKey && project)) {
    console.log("[GenAI] Initializing with Vertex AI...");
    return new GoogleGenAI({ 
      vertexai: true,
      project: project,
      location: location,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }

  // Otherwise, default to standard Gemini API Key
  if (!apiKey) {
    throw new Error('No API key or Vertex AI project config found. Please set GEMINI_API_KEY.');
  }

  console.log("[GenAI] Initializing with Gemini API Key...");
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

function isRetryableError(e: any): boolean {
   let errmsg = e.message ? e.message.toLowerCase() : "";
   if (errmsg.includes("quota exceeded") || 
       errmsg.includes("rate limit") || 
       errmsg.includes("resource exhausted") || 
       errmsg.includes("429") || 
       errmsg.includes("503") || 
       errmsg.includes("unavailable") || 
       errmsg.includes("try again later")) {
       return true;
   }
   // Try falling back on any unexpected error to be safe, depending on requirements
   return true;
}

async function generateContentWithFallback(contents: any, config: any, models: string[]) {
  const ai = getGenAI();
  
  for (const model of models) {
     console.log(`[Vertex AI] Trying model: ${model}`);
     try {
       const response = await ai.models.generateContent({
         model,
         contents,
         config
       });
       console.log(`[Vertex AI] Success with model: ${model}`);
       return response;
     } catch (e: any) {
       console.log(`[Vertex AI] Error with model ${model}:`, e.message);
       if (model === models[models.length - 1] || !isRetryableError(e)) {
           throw e;
       }
       console.log("Falling back to next model...");
     }
  }
  throw new Error("All fallbacks exhausted");
}

router.post('/generate/foundation', async (req: Request, res: Response): Promise<void> => {
  console.log("POST /api/generate/foundation called");
  try {
    const { rawIdea } = req.body;
    if (!rawIdea) { res.status(400).json({ error: 'Missing rawIdea' }); return; }

    // Step 1: Execute 00 IDEA SETUP
    const ideaSetupResponse = await generateContentWithFallback(
      `RAW IDEA:\n"${rawIdea}"`,
      {
        systemInstruction: SETUP_PROMPT,
        responseMimeType: 'application/json',
        responseSchema: ideaSetupSchema,
        temperature: 0.7,
      },
      ['gemini-2.5-pro', 'gemini-2.5-flash']
    );

    const ideaSetupData = JSON.parse(ideaSetupResponse.text || '{}');

    // Step 2: Execute 01 FOUNDATION DNA
    let promptText01 = `RAW IDEA: "${rawIdea}"\n\n`;
    promptText01 += `00 IDEA SETUP HANDOFF PACKAGE:\n${JSON.stringify(ideaSetupData.handoffPackageToStage01, null, 2)}\n\n`;

    const response01 = await generateContentWithFallback(
      promptText01,
      {
        systemInstruction: FOUNDATION_PROMPT,
        responseMimeType: 'application/json',
        responseSchema: foundationDnaSchema,
        temperature: 0.7,
      },
      ['gemini-3.5-flash', 'gemini-2.5-flash']
    );

    const data01 = JSON.parse(response01.text || '{}');
    
    // Combine everything into a single return format
    res.json({
      stage00: ideaSetupData,
      stage01: data01
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message || 'Generation failed' });
  }
});

router.post('/generate/outline', async (req: Request, res: Response): Promise<void> => {
  console.log("POST /api/generate/outline called");
  try {
    const projectData = req.body;
    let promptText = `Execute 02 MACRO OUTLINE based on the Foundation DNA:\n${JSON.stringify(projectData, null, 2)}\n\n`;

    const response = await generateContentWithFallback(
      promptText,
      {
        systemInstruction: MACRO_OUTLINE_PROMPT,
        responseMimeType: 'application/json',
        responseSchema: macroOutlineSchema,
        temperature: 0.7,
      },
      ['gemini-3.1-pro-preview', 'gemini-2.5-flash']
    );

    const data = JSON.parse(response.text || '{}');
    res.json(data);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message || 'Generation failed' });
  }
});

router.post('/generate/scenes', async (req: Request, res: Response): Promise<void> => {
    console.log("POST /api/generate/scenes called");
    try {
      const projectData = req.body;
      let promptText = `Execute 03 SCENE CARDS based on the foundation and 9-part outline:\n`;
      promptText += `Foundation: \n${JSON.stringify(projectData.foundation, null, 2)}\n`;
      promptText += `Outline: \n${JSON.stringify(projectData.outline, null, 2)}\n\n`;
  
      const response = await generateContentWithFallback(
        promptText,
        {
          systemInstruction: SCENE_CARDS_PROMPT,
          responseMimeType: 'application/json',
          responseSchema: sceneCardsSchema,
          temperature: 0.7,
        },
        ['gemini-3.5-flash', 'gemini-2.5-flash']
      );
  
      const data = JSON.parse(response.text || '{}');
      res.json(data);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message || 'Generation failed' });
    }
});

router.post('/generate/script-part', async (req: Request, res: Response): Promise<void> => {
    console.log("POST /api/generate/script-part called");
    try {
      const { partNumber, foundation, outlinePart, scenesForPart, previousPartsContext } = req.body;
      
      let promptText = `Execute 04 FINAL SCRIPT. Write PART ${partNumber} of 9 completely.\n\n`;
      promptText += `Foundation DNA: ${JSON.stringify(foundation.stage00 || foundation)}\n`;
      promptText += `Outline for this Part: ${JSON.stringify(outlinePart)}\n`;
      promptText += `Scenes to execute: ${JSON.stringify(scenesForPart)}\n`;
      if (previousPartsContext) {
         promptText += `Summary of previous events (for continuity): ${previousPartsContext}\n`;
      }
      
      promptText += `\nOutput pure text for the script of Part ${partNumber}. Respond ONLY with the text of the script. Do not use JSON. Ensure you include the [AVATAR] tags.`;

      const response = await generateContentWithFallback(
        promptText,
        {
          systemInstruction: FINAL_SCRIPT_PROMPT,
          temperature: 0.75,
        },
        ['gemini-3.1-pro-preview', 'gemini-2.5-flash']
      );
  
      res.json({ content: response.text });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message || 'Generation failed' });
    }
});

router.post('/generate/qa', async (req: Request, res: Response): Promise<void> => {
    console.log("POST /api/generate/qa called");
    try {
      const { fullScript, foundation } = req.body;
      let promptText = `Handoff Data: \n${JSON.stringify(foundation, null, 2)}\n\n`;
      promptText += `Script Text:\n${fullScript}\n`; 
      
      const response = await generateContentWithFallback(
        promptText,
        {
          systemInstruction: LINTER_QA_PROMPT,
          temperature: 0.2,
        },
        ['gemini-3.1-pro-preview', 'gemini-2.5-flash']
      );
  
      res.json({ content: response.text });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message || 'Generation failed' });
    }
});

router.post('/generate/revise', async (req: Request, res: Response) => {
  console.log("POST /api/generate/revise called");
  try {
    const { stage, currentData, prompt } = req.body;
    let schema: any;
    let isJson = true;

    if (stage === 'foundation') {
      schema = {
        type: Type.OBJECT,
        properties: {
            stage00: ideaSetupSchema,
            stage01: foundationDnaSchema,
        }
      };
    } else if (stage === 'outline') {
      schema = macroOutlineSchema;
    } else if (stage === 'scenes') {
      schema = sceneCardsSchema;
    } else {
      isJson = false;
    }

    const systemInstruction = `You are revising the content for stage: ${stage}.
The user wants to make specific changes to the current data.
User's request: ${prompt}

Current Data:
${typeof currentData === 'string' ? currentData : JSON.stringify(currentData, null, 2)}

Carefully apply the user's instructions to the Current Data. Rewrite the data to incorporate the requested changes while maintaining the original parts that were not asked to be changed.
${isJson ? 'You MUST output in the exact same JSON schema structure as the original data.' : 'Output only the revised text.'}`;

    const config: any = { temperature: 0.7 };
    if (isJson) {
      config.responseMimeType = 'application/json';
      config.responseSchema = schema;
    }

    let revisionModels = ['gemini-3.1-pro-preview', 'gemini-2.5-flash'];
    if (stage === 'foundation') {
      revisionModels = ['gemini-3.5-flash', 'gemini-2.5-flash'];
    } else if (stage === 'scenes') {
      revisionModels = ['gemini-3.5-flash', 'gemini-2.5-flash'];
    }

    const response = await generateContentWithFallback(
      systemInstruction,
      config,
      revisionModels
    );

    if (isJson) {
      res.json(JSON.parse(response.text || '{}'));
    } else {
      res.json({ content: response.text });
    }
  } catch (error: any) {
    console.error("Revise error", error);
    res.status(500).json({ success: false, error: error.message || 'Generation failed' });
  }
});

export { router as generateRouter };
