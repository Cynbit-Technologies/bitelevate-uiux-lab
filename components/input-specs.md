# Component Specification: Accessible TextInput

> ApexDesign System Component Specification • Version 1.0

---

## 1. Component Overview
The `TextInput` component allows users to input short-form alphanumeric text. It must support high-contrast focus rings, clear inline validation micro-copy, and accessible ARIA attributes.

---

## 2. Interactive States & Visual Tokens

| State | Background | Border | Text Color | Focus Ring | Helper Copy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Default** | `#ffffff` | `#e4e4e7` (1px) | `#09090b` | None | Subtle gray hint (`#71717a`) |
| **Hover** | `#ffffff` | `#a1a1aa` (1px) | `#09090b` | None | Subtle gray hint (`#71717a`) |
| **Focused** | `#ffffff` | `#09090b` (1.5px) | `#09090b` | `2px solid #09090b` (offset 2px) | Subtle gray hint (`#71717a`) |
| **Error** | `#fef2f2` | `#dc2626` (1.5px) | `#09090b` | `2px solid #dc2626` | High-contrast red (`#b91c1c`) |
| **Disabled** | `#f4f4f5` | `#e4e4e7` (1px) | `#a1a1aa` | None | Hidden |

---

## 3. Dimensions & Spatial Scale
- **Height**: `40px` (Desktop) / `44px` (Touch target on mobile)
- **Padding**: `10px 14px` (`space-3` / `space-4`)
- **Border Radius**: `8px` (`radius-md`)
- **Font Size**: `14px` (`typography.body-base.fontSize`)
- **Line Height**: `20px`

---

## 4. Accessibility & Micro-Copy Standards
- **Label Association**: Every input MUST have an explicit `<label for="...">` element. Floating placeholders alone are NOT permitted.
- **Error Micro-Copy**: Clear, friendly instructions. 
  - *Bad*: "Invalid value"
  - *Good*: "Please enter a valid work email address (e.g. name@company.com)."
- **ARIA Attributes**: When in error state, attach `aria-invalid="true"` and `aria-describedby="[input-id]-error"`.
