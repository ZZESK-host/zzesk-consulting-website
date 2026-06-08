# ZZESK Consulting Website

Production-ready marketing website for ZZESK Consulting, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React, and a lightweight canvas neural-network hero background.

## Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run lint
npm run build
npm run start
```

## Deploying To Vercel

1. Push this project to a Git repository.
2. Import the repository into Vercel.
3. Use the default Next.js settings.
4. Add the production domain `zzesk.com`.
5. Confirm the canonical URL and metadata in `src/content/site.ts` before launch.

## Editing Website Content

Most page copy, services, navigation, footer details, and business metadata live in:

```text
src/content/site.ts
```

Page-level structure lives under `src/app`.

## Connecting The Contact Form

The contact form component is:

```text
src/components/contact-form.tsx
```

It validates fields on the front end and intentionally does not show a fake success state. Connect it to a backend route, CRM, or form service before enabling real submissions.

## Adding Analytics Later

Add analytics in:

```text
src/app/layout.tsx
```

Use a privacy-conscious analytics tool and document consent requirements before launch.

## Adjusting The Neural-Network Background

The canvas background is isolated in:

```text
src/components/neural-network-background.tsx
```

Adjust density, movement speed, line distance, cursor influence, and colours through the constants near the top of that component.

## Design Decisions

- Restrained dark interface with near-black navy backgrounds, cool grey text, subtle borders, and a controlled electric-blue accent.
- Text-first, founder-led positioning with practical service language and no invented logos, awards, testimonials, metrics, or case studies.
- Lightweight custom canvas effect for the hero background instead of a heavy animation library.
- Reusable content-driven components for service cards, process steps, CTA panels, and page sections.
- Accessible mobile navigation, form validation, focus states, semantic headings, reduced-motion handling, and decorative visuals hidden from assistive technology.

## Remaining TODO Items Before Launch

- Connect the contact form to a backend, CRM, or form service.
- Review and finalize privacy policy wording with appropriate legal guidance.
- Add the real LinkedIn profile URL in the footer.
- Add analytics only after choosing the tool and consent approach.
- Replace the favicon placeholder with final brand assets if desired.
- Review all copy once final service packages and delivery process are confirmed.
