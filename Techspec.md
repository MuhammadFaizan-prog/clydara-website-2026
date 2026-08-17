# Technical Specification (Techspec)

## 1. Architecture Overview
- **Framework**: React 18 + Vite + TypeScript
- **Styling Strategy**: Pure CSS Modules & Global Design Tokens (`src/styles/tokens.css`, `src/styles/globals.css`)
- **Typography**: Cal Sans (Display headers) & Inter (Body, UI, Metadata)
- **Animation System**: GSAP (GreenSock) + ScrollTrigger plugin + hardware-accelerated CSS keyframe animations
- **Asset Strategy**: High-res vector SVGs, Framer CDN image assets, responsive image constraints

## 2. Design Tokens & Variables
- Background light: `#f0f0f0` / Body bg: `#dcdcdc`
- Background dark: `#0d0d0d` / Card dark: `#1a1a2e`
- Primary accent: `#00b4d8` / Accent hover: `#38d0f0`
- Border radius tokens: pill (999px), xl (24px), lg (20px), md (12px), sm (8px)

## 3. Component Hierarchy
- `App.tsx`
  - `Navigation`
  - `Hero`
  - `LogoTicker`
  - `About`
  - `Works`
  - `Services`
  - `Founders`
  - `Values`
  - `CTA`
  - `Testimonials`
  - `Footer`

## 4. Animation Engineering
- **Page Load Timeline**: Header, Hero Founders badge, Staggered Headline Lines, Description, CTA, Banner.
- **Scroll-Triggered Reveals**: GSAP Context management with automatic `ctx.revert()` on unmount.
- **Marquee Tracks**: Pure CSS GPU-friendly `translateX` loops with `will-change: transform`.
