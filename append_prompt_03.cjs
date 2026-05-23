const fs = require('fs');
let code = fs.readFileSync('server/prompts.ts', 'utf8');
let promptText = fs.readFileSync('stage03_prompt.txt', 'utf8');

const newPrompt = '\nexport const SCENE_CARDS_PROMPT = `' + promptText.replace(/`/g, '\\`').replace(/\$/g, '\\$') + '`;\n';

if (!code.includes('export const SCENE_CARDS_PROMPT')) {
  fs.writeFileSync('server/prompts.ts', code + newPrompt);
}
