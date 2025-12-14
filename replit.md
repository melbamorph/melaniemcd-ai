# Melanie McDonough Portfolio

## Overview

A personal portfolio website for Melanie McDonough focused on local government and civic technology work. The site serves as a working space for sharing work samples, demos, playbooks, and writing related to AI adoption and service delivery in local government contexts.

The portfolio is built as a static content site using Next.js with a clean, clay-morphism inspired design aesthetic. Content is currently hardcoded as static data within page components, with sections for Work, Demos, Playbooks, Writing, and About.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 14** with App Router architecture
- TypeScript for type safety
- React 18 for component rendering

### Styling Approach
- **Tailwind CSS** for utility-first styling
- Custom design system with clay-morphism aesthetic (soft shadows, rounded corners)
- Custom color palette using warm "sand" tones
- Inter font from Google Fonts
- Component classes defined in globals.css (`.card`, `.nav-link`, `.button-primary`, etc.)

### Project Structure
- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components
- Root layout provides consistent header navigation and footer
- Each section (work, demos, playbooks, writing, about, contact) has its own page

### Content Management
- Static content hardcoded in page components as TypeScript arrays
- No CMS or database currently integrated
- Content includes work highlights, demos, playbooks, and articles with title, description, and status/date metadata

### Interactive Features
- Subscribe modal component with email capture (client-side only, no backend)
- Accessible modal with focus trap and keyboard navigation
- Canvas confetti animation on form submission

## External Dependencies

### NPM Packages
- **next** (14.2.35) - React framework
- **react** / **react-dom** (18.3.1) - UI library
- **canvas-confetti** - Celebration animation for subscribe form
- **tailwindcss** - Utility CSS framework
- **autoprefixer** / **postcss** - CSS processing

### Development Tools
- TypeScript with strict mode
- ESLint with Next.js core web vitals config

### External Services
- None currently integrated
- Subscribe form is UI-only (no email service connected)
- LinkedIn referenced for contact but no API integration