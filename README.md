# Portfolio

A modern, responsive developer portfolio built with **Next.js 16**, **React 19**, and **TypeScript**.

This project showcases:
- profile and contact details
- skills and education
- featured projects with direct links
- certifications with attached PDF documents
- dark/light theme switching

## Highlights

- Fast app-router setup with Next.js
- Responsive layout for desktop and mobile
- Theme toggle with persisted preference
- Project cards with always-visible action buttons
- Certification section with direct `View Document` links
- SEO essentials:
  - metadata
  - `robots.ts`
  - `sitemap.ts`
  - JSON-LD person schema

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Custom CSS for full visual system
- ESLint

## Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    robots.ts
    sitemap.ts
  components/
    site-header.tsx
    theme-toggle.tsx
    portfolio-content.tsx
  lib/
    portfolio-data.ts
public/
  project images
  social icons
  resume pdf
  certificate pdfs
```

## Featured Projects

- Glaucoma Disease Prediction  
  Live: https://ak4005.streamlit.app/
- Finance Tracking Website  
  Live: https://fin-bridge-ten.vercel.app/
- Waste Management System  
  Live: https://eco-pluse.vercel.app/
- Lok Shikayat – Digital Complaint Management System  
  Code: https://github.com/Ayushkr0005
- Brain Tumor Detection System  
  Code: https://github.com/Ayushkr0005

## Local Development

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Open

```text
http://127.0.0.1:3000
```

## Available Scripts

- `npm run dev` - start local dev server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint checks

## Customization

Most editable content is centralized in:

- `src/lib/portfolio-data.ts`

Update this file to change:
- personal details
- social links
- skills
- education
- projects
- certifications

## Deployment

Recommended: **Vercel** (native Next.js support).

---

If you are hiring or collaborating on software/AI projects, feel free to connect through the contact section of the site.
