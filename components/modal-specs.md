# Component Specification: Accessible Modal Dialog

> ApexDesign System Component Specification • Version 1.0

---

## 1. Component Overview
The `ModalDialog` component presents critical information or confirmation requests requiring immediate user decision. It traps keyboard focus and prevents interactions with underlying page content.

---

## 2. Structural Anatomy
1. **Backdrop Scrim**: `rgba(0, 0, 0, 0.4)` with `backdrop-filter: blur(4px)`.
2. **Card Container**: `#ffffff`, `border-radius: 16px` (`radius-xl`), elevation shadow.
3. **Header Area**: Modal Title (`heading-md` / `20px` bold) and Dismiss 'X' Button.
4. **Content Body**: Descriptive copy explaining consequences of action (`14px` regular).
5. **Footer Actions**: Secondary action ("Cancel") & Primary action ("Confirm" / "Delete").

---

## 3. Keyboard Navigation & Tab Focus Sequence

```
[User triggers Modal]
   │
   ▼
1. Focus immediately transfers to Modal Title (aria-labelledby)
   │
   ▼
2. Tab key moves to Modal Body / Form inputs (if applicable)
   │
   ▼
3. Tab key moves to Secondary Action ("Cancel")
   │
   ▼
4. Tab key moves to Primary Action ("Confirm")
   │
   ▼
5. Tab key loops back to Dismiss 'X' or Title (Focus Trap - never bleeds to page)
```

---

## 4. Dismissal & Unsaved Work Behavior
- **Escape Key**: Pressing `Esc` immediately triggers cancellation.
- **Outside Scrim Click**:
  - If no unsaved inputs exist: Dismiss modal smoothly.
  - If unsaved inputs exist: Shake animation (`duration-fast`) and display warning toast.
