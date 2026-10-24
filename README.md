# ApexDesign System & Product Experience Lab (`bitelevate-uiux-lab`)

> Enterprise Design Tokens, WCAG 2.1 AA Accessibility Standards, Component Architecture & Interactive Prototypes.

---

## 1. What the Project Is

**ApexDesign System & Product Experience Lab** is an industrial design systems workspace for UI/UX Designer Interns at Cynbit Technologies.

In this lab, you work across the entire product design lifecycle:
- **Design Tokens**: Standardizing color primitives, semantic tokens, 8pt spatial scales, and typography hierarchies.
- **Accessibility (WCAG 2.1 AA)**: Guaranteeing 4.5:1 text contrast, accessible focus rings, and screen-reader focus traps.
- **Component Architecture**: Authoring developer-ready component specifications (Inputs, Modals, Dropdowns, Cards).
- **Motion & Micro-Interactions**: Defining cubic-bezier easing curves and interactive smart-animate prototypes.

---

## 2. Technology & Tooling Stack

- **Design Environment**: Figma (Variables, Auto Layout, Interactive Components)
- **Token Architecture**: W3C Design Tokens Community Group (DTCG) JSON Specification
- **Code & Handoff**: Node.js, Tailwind CSS token mappings, CSS Custom Properties
- **Accessibility Testing**: Contrast validation scripts & WCAG 2.1 AA evaluation

---

## 3. Project Structure

```
bitelevate-uiux-lab/
├── tokens/
│   ├── primitives.json          # Base color scales, raw radii, elevation
│   ├── semantic-colors.json     # Semantic surface, brand, error & success aliases
│   ├── spacing.json             # 8pt spatial grid scale (4px to 64px)
│   ├── typography.json          # Modular type scale (12px to 48px)
│   └── motion.json              # Animation durations & cubic-bezier easing curves
├── components/
│   ├── input-specs.md           # Accessible form input component specification
│   └── modal-specs.md           # Accessible modal dialog & focus trap specification
├── design-system/
│   ├── motion-guidelines.md     # Micro-interaction principles & guidelines
│   └── DESIGN_SYSTEM_SPEC.md    # Capstone design system specification
├── scripts/
│   ├── validate-tokens.js       # Validates JSON token syntax and structure
│   ├── check-contrast.js        # Automated WCAG 2.1 AA contrast ratio validator
│   └── build-tokens.js          # Compiles tokens into dist/tokens.json & theme.css
├── templates/
│   └── figma-starter-kit.md     # Figma community starter kit setup guide
├── .designer-profile.md         # Candidate designer profile & portfolio links
├── package.json
└── README.md
```

---

## 4. Quick Start & Local Setup

1. **Fork the Repository**:
   Click **Fork** on `https://github.com/Cynbit-Technologies/bitelevate-uiux-lab` to create a copy under your personal GitHub profile.

2. **Clone Locally**:
   ```bash
   git clone https://github.com/<your-username>/bitelevate-uiux-lab.git
   cd bitelevate-uiux-lab
   ```

3. **Validate Design Tokens**:
   ```bash
   node scripts/validate-tokens.js
   ```

4. **Run Automated Contrast Checker**:
   ```bash
   node scripts/check-contrast.js
   ```

5. **Compile Token Distribution Bundle**:
   ```bash
   node scripts/build-tokens.js
   ```

---

## 5. Daily Git Workflow

For each daily milestone:
1. Create a branch:
   ```bash
   git checkout -b task/day-1-setup
   ```
2. Commit your deliverables:
   ```bash
   git commit -m "feat: complete day 1 design system tokens"
   ```
3. Push to your fork:
   ```bash
   git push origin task/day-1-setup
   ```
4. Open a Pull Request on your fork and submit the PR URL to your BitElevate dashboard.

---

## 6. License & Organization

Maintained by **Cynbit Technologies** for the **BitElevate Internship Program**. Licensed under MIT.
