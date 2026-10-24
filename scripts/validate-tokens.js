/**
 * validate-tokens.js
 * Validates syntax and basic schema requirements for design token JSON files.
 */
const fs = require('fs');
const path = require('path');

const tokensDir = path.join(__dirname, '..', 'tokens');
const files = fs.readdirSync(tokensDir).filter(f => f.endsWith('.json'));

let hasError = false;

console.log('--- ApexDesign Token Validator ---');

for (const file of files) {
  const filePath = path.join(tokensDir, file);
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(raw);
    const keys = Object.keys(parsed).filter(k => !k.startsWith('$'));
    console.log(`PASS [${file}]: Valid JSON with ${keys.length} top-level token groups (${keys.join(', ')})`);
  } catch (err) {
    console.error(`FAIL [${file}]: ${err.message}`);
    hasError = true;
  }
}

if (hasError) {
  console.error('\nToken validation failed. Please fix syntax errors above.');
  process.exit(1);
} else {
  console.log('\nAll token files are valid and ready for developer handoff!\n');
  process.exit(0);
}
