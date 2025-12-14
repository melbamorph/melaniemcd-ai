# Melanie McDonough Portfolio - AI Solutions for Government

## Overview
A modern Next.js 14 portfolio showcasing AI adoption strategies and civic technology work. Designed to impress OpenAI for a Solutions Engineer role on the government team.

## Design System
- **Dark mode** with dark navy/slate backgrounds (#0a0a0f base)
- **Amber/gold accents** (#fbbf24) for highlights and CTAs
- **Glassmorphism cards** with subtle borders and backdrop blur
- **Modern typography** using Inter font with generous whitespace

## Modern CSS Features
- **View Transitions API** - Smooth page transitions on client-side navigation
- **Scroll-driven animations** - Content reveals as user scrolls (with @supports fallback)
- **Container queries** - Responsive component styling
- **CSS :has() support** - Dynamic parent-based styling
- **Reduced motion** - All animations respect prefers-reduced-motion

## Project Structure
```
app/
  about/page.tsx       # About page
  contact/page.tsx     # Contact with LinkedIn + Subscribe
  demos/page.tsx       # AI demo concepts
  playbooks/page.tsx   # Reusable guides
  work/page.tsx        # Work samples
  writing/page.tsx     # Articles
  globals.css          # Design system + animations
  layout.tsx           # Root layout with nav
  page.tsx             # Home page

components/
  SubscribeCTA.tsx     # Subscribe modal (glassmorphism, confetti)
```

## Routes
All routes use Next.js Link for client-side navigation:
- `/` - Home with hero, focus areas, featured work
- `/work` - Work samples (Draft/Coming soon)
- `/demos` - AI sandbox concepts
- `/playbooks` - Lean team guides
- `/writing` - Field notes
- `/about` - Bio and background
- `/contact` - LinkedIn connect + Subscribe

## Tech Stack
- **Next.js 14.2.35** (App Router)
- **Tailwind CSS 3.4.4** with custom design tokens
- **TypeScript 5.5.4**
- **canvas-confetti** for subscribe celebration
- **Node.js 20+**

## Key Features
- SubscribeCTA modal with focus trap, placeholder submit, reduced-motion confetti
- Scroll-based reveal animations
- Glassmorphism card styling
- Gradient text effects
- Subtle grid pattern overlay

## Development
```bash
npm run dev      # Dev server at 0.0.0.0:5000
npm run build    # Production build
npm run start    # Production at 0.0.0.0:5000
npm run lint     # ESLint
```

## Replit Config
- Binds to 0.0.0.0:5000 for Replit proxy
- legacy-peer-deps in .npmrc
- Autoscale deployment configured
