# Melanie McDonough Portfolio - AI Experiments for Local Government

## Overview
A minimal Next.js 14 landing page serving as a personal innovation space for sharing AI experiments and learnings focused on local government and civic technology. Currently in "launch framework" mode with more content coming soon.

## Current State
- **Minimal landing page** with hero, coming soon teaser (Zoner MCP, Chatbot), and social links
- **Simplified navigation**: Home, About, Contact
- **Hidden for now**: Work, Demos, Playbooks, Writing (pages exist but not linked)
- **Social links**: GitHub and LinkedIn prominently displayed

## Design System
- **Dark mode** with dark navy/slate backgrounds (#0a0a0f base)
- **Amber/gold accents** (#fbbf24) for highlights and CTAs
- **Glassmorphism cards** with subtle borders and backdrop blur
- **Modern typography** using Inter font with generous whitespace

## Modern CSS Features
- **View Transitions API** - Smooth page transitions on client-side navigation
- **Scroll-driven animations** - Content reveals as user scrolls (with @supports fallback)
- **text-wrap: balance** - Clean headline typography
- **color-mix()** - Subtle color variations for cards
- **Backdrop blur** - Glassmorphism effects
- **Reduced motion** - All animations respect prefers-reduced-motion

## Project Structure
```
app/
  about/page.tsx       # About page (active)
  contact/page.tsx     # Contact page (active)
  demos/page.tsx       # AI demo concepts (hidden for now)
  playbooks/page.tsx   # Reusable guides (hidden for now)
  work/page.tsx        # Work samples (hidden for now)
  writing/page.tsx     # Articles (hidden for now)
  globals.css          # Design system + animations
  layout.tsx           # Root layout with nav
  page.tsx             # Minimal home/landing page

components/
  SubscribeCTA.tsx     # Subscribe modal (not used in current minimal version)
```

## Routes
Active routes:
- `/` - Minimal landing with hero, projects section, social links
- `/about` - Bio and background
- `/contact` - Contact page
- `/projects/zoner-mcp` - Zoner MCP project detail page

Hidden routes (pages exist, nav links removed):
- `/work` - Work samples
- `/demos` - AI sandbox concepts
- `/playbooks` - Lean team guides
- `/writing` - Field notes

## Project Page Template
The `/projects/zoner-mcp/page.tsx` serves as a template for future project pages. Key sections:
- Back navigation link
- Project title with icon
- Description and overview
- GitHub/Demo action buttons
- "What It Does" section
- "Design Philosophy" section
- "Tech Stack" badges
- "Key Features" grid
- "API Endpoints" table (if applicable)
- License info

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
