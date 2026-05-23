import React, { useState, useRef } from 'react';
import { Sidebar } from './components/Sidebar.tsx';
import { SetupStage } from './components/SetupStage.tsx';
import { FoundationView } from './components/FoundationView.tsx';
import { OutlineView } from './components/OutlineView.tsx';
import { ScenesView } from './components/ScenesView.tsx';
import { QAView } from './components/QAView.tsx';
import { ProjectData } from './types.ts';
import { RevisionBox } from './components/Shared.tsx';

async function fetchJson(url: string, options: RequestInit) {
  const response = await fetch(url, options);
  const raw = await response.text();
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    console.error("Backend returned non-JSON:", raw);
    throw new Error("Backend returned HTML/non-JSON. Check API route.");
  }
  if (!response.ok) {
     throw new Error(data.error || "Generation failed");
  }
  return data;
}

export default function App() {
  const [data, setData] = useState<ProjectData>({
    id: '1',
    rawIdea: '',
    status: 'idle',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });
  const [activeStage, setActiveStage] = useState('setup');
  const stopGenerationRef = useRef(false);

  const startPipeline = async (idea: string) => {
    stopGenerationRef.current = false;
    setData(prev => ({ ...prev, rawIdea: idea, status: 'generating_foundation' }));
    
    // Call Foundation API
    let foundationData;
    try {
      if (stopGenerationRef.current) return;
      foundationData = await fetchJson('/api/generate/foundation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rawIdea: idea }),
      });
      
      setData(prev => ({ 
        ...prev, 
        stage00: foundationData.stage00,
        stage01: foundationData.stage01,
        stage03: foundationData.stage03,
        stage04: foundationData.stage04,
        status: 'generating_outline' 
      }));
      setActiveStage('foundation');
    } catch (e: any) {
        setData(prev => ({ ...prev, status: 'error', error: e.message }));
        return;
    }

    // Call Outline API
    let outlineData;
    try {
      if (stopGenerationRef.current) return;
      outlineData = await fetchJson('/api/generate/outline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(foundationData), 
      });
      
      setData(prev => ({
        ...prev,
        stage02: outlineData,
        status: 'generating_scenes'
      }));
      setActiveStage('outline');
    } catch (e: any) {
        setData(prev => ({ ...prev, status: 'error', error: e.message }));
        return;
    }

    // Call Scenes API
    let scenesData;
    try {
      if (stopGenerationRef.current) return;
      const projectSoFar = { foundation: foundationData, outline: outlineData };
      scenesData = await fetchJson('/api/generate/scenes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectSoFar),
      });

      setData(prev => ({
        ...prev,
        stage03: scenesData,
        status: 'generating_script'
      }));
      setActiveStage('scenes');
    } catch (e: any) {
        setData(prev => ({ ...prev, status: 'error', error: e.message }));
        return;
    }

    // Call Script sequentially
    let scriptParts: {partNumber: number, content: string}[] = [];
    try {
      const totalParts = 9;
      
      for (let i = 1; i <= totalParts; i++) {
         if (stopGenerationRef.current) break;
         setData(prev => ({ ...prev, currentScriptPart: i }));
         // Safely extract outline and scenes if fields match the new schemas
         const partOutline = outlineData.complete9PartMacroOutline?.partSummaries?.find((p: any) => p.partNumber === String(i)) || outlineData;
         const partScenes = scenesData.completeSceneCardsByPart?.find((p: any) => p.partNumber === String(i)) || scenesData;
         const previousContext = scriptParts.map(p => `Part ${p.partNumber} completed.`).join(' ');

         const scriptRes = await fetchJson('/api/generate/script-part', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              partNumber: i,
              foundation: foundationData,
              outlinePart: partOutline,
              scenesForPart: partScenes,
              previousPartsContext: previousContext,
            }),
         });
         scriptParts.push({ partNumber: i, content: scriptRes.content });
         
         setData(prev => ({
           ...prev,
           stage07: [...scriptParts]
         }));
      }

      if (stopGenerationRef.current) return;
      setData(prev => ({ ...prev, status: 'qa', stage07: scriptParts }));
      setActiveStage('script');

      // Call QA
      try {
        const fullScriptStr = scriptParts.map(p => p.content).join('\n\n');
        const qaData = await fetchJson('/api/generate/qa', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ fullScript: fullScriptStr, foundation: foundationData }),
        });
        setData(prev => ({ ...prev, status: 'complete', stage08: qaData }));
      } catch (e: any) {
        console.error("QA Error", e);
        setData(prev => ({ ...prev, status: 'complete', error: "QA Failed: " + e.message })); 
      }
    } catch (e: any) {
        setData(prev => ({ ...prev, status: 'error', error: e.message }));
    }
  };

  const clearSession = () => {
    stopGenerationRef.current = true;
    setData({
      id: '1',
      rawIdea: '',
      status: 'idle',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    setActiveStage('setup');
  };

  const stopGeneration = () => {
    stopGenerationRef.current = true;
    setData(prev => ({ ...prev, status: 'idle' }));
  };

  const deleteScript = () => {
    setData(prev => ({ ...prev, stage07: [] }));
  };

  const deleteScriptPart = (partNum: number) => {
    setData(prev => ({ ...prev, stage07: prev.stage07?.filter(p => p.partNumber !== partNum) }));
  };

  const downloadScript = () => {
    if (!data.stage07) return;
    const text = data.stage07.map(p => p.content).join('\n\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'script.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-[100dvh] bg-[#080808] text-[#d4d4d4] font-sans overflow-hidden p-4 select-none gap-6">
      <Sidebar data={data} activeStage={activeStage} setActiveStage={setActiveStage} clearSession={clearSession} />
      <main className="flex-1 overflow-auto relative border border-[#222] bg-black">
        {data.status === 'error' && (
           <div className="absolute top-0 left-0 right-0 border-b border-[#f43f5e] bg-[#1a0a0a] text-[#f43f5e] p-4 text-center z-50 font-mono text-xs uppercase">
             System Error: {data.error}
           </div>
        )}
        {activeStage === 'setup' && <SetupStage data={data} onGenerate={startPipeline} status={data.status} />}
        {activeStage === 'foundation' && <FoundationView data={data} setData={setData} />}
        {activeStage === 'outline' && <OutlineView data={data} setData={setData} />}
        {activeStage === 'scenes' && <ScenesView data={data} setData={setData} />}
        {activeStage === 'script' && (
           <div className="max-w-4xl mx-auto py-12 px-8 space-y-12">
             <div className="border-b border-[#222] pb-6 flex justify-between items-end">
               <div>
                 <h2 className="text-3xl font-light italic font-serif text-white">Final Target Script</h2>
                 <p className="text-[10px] text-[#666] font-mono tracking-widest uppercase mt-1">Dopamine layout executed. Raw output.</p>
               </div>
               <div className="flex gap-2">
                 {data.status === 'generating_script' && (
                   <button onClick={stopGeneration} className="text-xs bg-red-900/50 hover:bg-red-900 text-white px-3 py-1 font-mono uppercase transition-colors">Stop</button>
                 )}
                 <button onClick={downloadScript} className="text-xs bg-[#222] hover:bg-[#333] text-white px-3 py-1 font-mono uppercase transition-colors">Download</button>
                 <button onClick={deleteScript} className="text-xs bg-[#222] hover:bg-red-900 text-white px-3 py-1 font-mono uppercase transition-colors">Clear All</button>
               </div>
             </div>
             {data.status === 'generating_script' && (
                 <div className="flex items-center text-[#f43f5e] bg-[#1a0a0a] p-4 border border-[#f43f5e33] text-xs font-mono uppercase justify-between">
                    <div className="flex items-center">
                      <span className="w-3 h-3 mr-3 animate-pulse bg-[#f43f5e]"></span>
                      Generating Part {data.currentScriptPart} of 9...
                    </div>
                    <span>Written {data.stage07?.length || 0} / 9</span>
                 </div>
             )}
             {data.stage07?.map((part, i) => (
                <div key={i} className="bg-black p-8 md:p-12 border border-[#333] whitespace-pre-wrap font-serif text-[#d4d4d4] leading-relaxed text-lg tracking-wide rounded-none group relative">
                  <button onClick={() => deleteScriptPart(part.partNumber)} className="absolute top-4 right-4 text-xs font-mono uppercase text-[#666] hover:text-[#f43f5e] opacity-0 group-hover:opacity-100 transition-opacity">Delete Part</button>
                  <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#f43f5e] mb-8 pb-4 border-b border-[#222] font-bold text-center">Document Part {part.partNumber}</h3>
                  {part.content}
                  <RevisionBox 
                    stage="script-part" 
                    currentData={part.content} 
                    onSuccess={(newData) => {
                      setData(prev => ({
                        ...prev,
                        stage07: prev.stage07?.map(p => p.partNumber === part.partNumber ? { ...p, content: newData.content } : p)
                      }));
                    }}
                  />
                </div>
             ))}
           </div>
        )}
        {activeStage === 'qa' && <QAView data={data} setData={setData} />}
      </main>
    </div>
  );
}
