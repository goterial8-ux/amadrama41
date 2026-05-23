const fs = require('fs');
const exampleText = fs.readFileSync('example_03.txt', 'utf8');
let code = fs.readFileSync('server/prompts.ts', 'utf8');

// We need to find where SCENE_CARDS_PROMPT ends.
// Let's just do a regex replace on the backtick for SCENE_CARDS_PROMPT.
// It ends with: "Therefore, surface originality and scene function must be checked before approval.\n`"

const searchStr = 'Therefore, surface originality and scene function must be checked before approval.\n`;';
const replaceStr = 'Therefore, surface originality and scene function must be checked before approval.\n\n' + exampleText.replace(/`/g, '\\`').replace(/\$/g, '\\$') + '\n`;';

if (code.includes(searchStr)) {
  code = code.replace(searchStr, replaceStr);
  fs.writeFileSync('server/prompts.ts', code);
  console.log("Appended successfully");
} else {
  console.log("Could not find search string");
}
