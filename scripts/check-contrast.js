/**
 * check-contrast.js
 * Evaluates color pairs for WCAG 2.1 AA (4.5:1 text) and AAA (7:1 text) compliance.
 */

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  return [
    (bigint >> 16) & 255,
    (bigint >> 8) & 255,
    bigint & 255
  ];
}

function getLuminance([r, g, b]) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(hex1, hex2) {
  const l1 = getLuminance(hexToRgb(hex1));
  const l2 = getLuminance(hexToRgb(hex2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const auditPairs = [
  { name: "Primary Text on White Surface", fg: "#09090b", bg: "#ffffff", min: 4.5 },
  { name: "Secondary Text on White Surface", fg: "#52525b", bg: "#ffffff", min: 4.5 },
  { name: "Success Text on Light Green", fg: "#047857", bg: "#ecfdf5", min: 4.5 },
  { name: "Error Text on Light Red", fg: "#b91c1c", bg: "#fef2f2", min: 4.5 },
  { name: "Warning Text on Light Amber", fg: "#b45309", bg: "#fffbeb", min: 4.5 },
  { name: "White Text on Zinc-950 Button", fg: "#ffffff", bg: "#09090b", min: 4.5 }
];

console.log('--- WCAG 2.1 AA Accessibility Contrast Audit ---');
let allPassed = true;

for (const pair of auditPairs) {
  const ratio = getContrastRatio(pair.fg, pair.bg);
  const formattedRatio = ratio.toFixed(2);
  const passed = ratio >= pair.min;
  const level = ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : 'FAIL';

  if (passed) {
    console.log(`PASS [${level} - ${formattedRatio}:1]: ${pair.name} (${pair.fg} on ${pair.bg})`);
  } else {
    console.error(`FAIL [${level} - ${formattedRatio}:1]: ${pair.name} (Required >= ${pair.min}:1)`);
    allPassed = false;
  }
}

if (!allPassed) {
  console.error('\nContrast audit failed! Adjust color values to comply with WCAG 2.1 AA.');
  process.exit(1);
} else {
  console.log('\nAll core color token pairings meet WCAG 2.1 AA standards!\n');
  process.exit(0);
}
