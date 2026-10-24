# Motion & Micro-Interaction Guidelines

> ApexDesign System Motion Standards • Version 1.0

---

## 1. Core Principles of Product Motion

1. **Functional, Not Flashy**: Motion exists to communicate state transitions, visual hierarchy, and spatial continuity — not as decoration.
2. **Swift by Default**: Micro-interactions should take 150ms to 250ms. Anything over 300ms feels sluggish in daily workflow applications.
3. **Respect User Settings**: Always honor `@media (prefers-reduced-motion: reduce)` by bypassing positional movement and using simple opacity fades.

---

## 2. Easing Taxonomy

| Easing Token | Cubic-Bezier Value | Appropriate Use Cases |
| :--- | :--- | :--- |
| **`motion.easing.standard`** | `cubic-bezier(0.2, 0.0, 0.0, 1.0)` | Cards reordering, accordion expand/collapse |
| **`motion.easing.ease-out`** | `cubic-bezier(0.16, 1.0, 0.3, 1.0)` | Dropdowns appearing, toast notifications entering |
| **`motion.easing.ease-in`** | `cubic-bezier(0.7, 0.0, 0.84, 0.0)` | Modals closing, menus dismissing |

---

## 3. Micro-Interaction Rules

- **Button Click Scale**: Scale down to `0.98` for `100ms`, then spring back to `1.0`.
- **Skeleton Shimmer**: `1500ms` infinite pulse using gradient alpha shifts from `0.05` to `0.15`.
- **Navigation Indicators**: Sliding active underline with `duration-fast` (`150ms`) deceleration.
