/**
 * build-tokens.js
 * Bundles JSON tokens and generates a ready-to-use CSS custom property bundle.
 */
const fs = require('fs');
const path = require('path');

const tokensDir = path.join(__dirname, '..', 'tokens');
const distDir = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const files = fs.readdirSync(tokensDir).filter(f => f.endsWith('.json'));
const bundle = {};

let cssOutput = '/**\n * ApexDesign System Tokens — Generated Bundle\n */\n:root {\n';

for (const file of files) {
  const name = file.replace('.json', '');
  const content = JSON.parse(fs.readFileSync(path.join(tokensDir, file), 'utf-8'));
  bundle[name] = content;
}

// Generate simple CSS variables
function extractTokens(obj, prefix = '') {
  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith('$')) continue;
    const currentPath = prefix ? `${prefix}-${key}` : key;
    if (val && typeof val === 'object' && val.$value !== undefined) {
      cssOutput += `  --${currentPath}: ${val.$value};\n`;
    } else if (val && typeof val === 'object') {
      extractTokens(val, currentPath);
    }
  }
}

extractTokens(bundle);
cssOutput += '}\n';

fs.writeFileSync(path.join(distDir, 'tokens.json'), JSON.stringify(bundle, null, 2));
fs.writeFileSync(path.join(distDir, 'theme.css'), cssOutput);

console.log('Build complete: generated dist/tokens.json and dist/theme.css');
