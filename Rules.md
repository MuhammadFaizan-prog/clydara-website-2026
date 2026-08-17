# Project Rules (Rules.md)

## 1. Code & Architecture Rules
- Write clean, modular TypeScript with strict typing.
- Separate components into dedicated directories under `src/components/<ComponentName>/` containing `<ComponentName>.tsx` and `<ComponentName>.css`.
- Rely on `src/styles/tokens.css` for all global spacing, typography scales, and color variables.
- Always clean up GSAP timelines using `gsap.context()` with `ctx.revert()` in React `useEffect` hooks to prevent memory leaks and duplicate listeners.

## 2. Design & Motion Standards
- No generic AI-generated card grids or arbitrary animations.
- Maintain Cal Sans for display headings and Inter for body text.
- Preserve exact color tokens (#00b4d8, #f0f0f0, #0d0d0d).
