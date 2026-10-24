# Contributing to ApexDesign System

1. All design token contributions must be accompanied by automated validation (`node scripts/validate-tokens.js`).
2. Any new color tokens MUST pass WCAG 2.1 AA (4.5:1 text contrast) via `node scripts/check-contrast.js`.
3. Pull requests must include a link to the corresponding Figma component or frame.
