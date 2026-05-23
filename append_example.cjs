const fs = require('fs');
const exampleText = fs.readFileSync('example.txt', 'utf8');

let code = fs.readFileSync('server/prompts.ts', 'utf8');

// Find the last backtick of MACRO_OUTLINE_PROMPT.
// Actually, it's easier to just search for the specific end string of MACRO_OUTLINE_PROMPT.
const searchStr = 'It must prepare enough structure for 03 SCENE CARDS without locking repetitive scene surfaces.\n`;';

if (code.includes(searchStr)) {
  const newEnding = 'It must prepare enough structure for 03 SCENE CARDS without locking repetitive scene surfaces.\n\n' + exampleText.replace(/`/g, '\\`').replace(/\$/g, '\\$') + '\n`;';
  code = code.replace(searchStr, newEnding);
  fs.writeFileSync('server/prompts.ts', code);
  console.log("Appended successfully");
} else {
  console.log("Could not find search string");
}
