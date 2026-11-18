# STUDIO A1 — Salon & Spa

Premium, responsive **Next.js App Router + TypeScript + Tailwind CSS v4 + Framer Motion** frontend in a Royal Black & Gold theme, inspired by the official STUDIO A1 / MJ sign images provided by the project owner.

## Getting started

Requirements: Node.js **20.9+** and npm.

```bash
npm install
cp .env.example .env.local  # Windows PowerShell: Copy-Item .env.example .env.local
npm run dev
```

Open http://localhost:3000

Production checks:

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Pages

- `/` Home, editorial hero and featured services
- `/about` Salon concept and brand story
- `/services` All 6 service categories
- `/services/[slug]` Individual service details
- `/pricing` Pricing enquiries (no fabricated prices)
- `/gallery` Filterable gallery with original branding photos vs. inspiration stock imagery
- `/team` Staff **role placeholders**, not verified profiles
- `/booking` Client-side appointment enquiry request
- `/contact` Contact details and email enquiry preparation
- `/dashboard` **UI-only preview**, not a secure admin dashboard
- Custom not-found page

## Configuration

The website opens in white and gold. Use the theme switch in the header to select the original black and gold theme; your choice is remembered in this browser when local storage is available.

Copy `.env.example` to `.env.local`, then fill in:

```ini
NEXT_PUBLIC_SALON_PHONE=+91...
NEXT_PUBLIC_SALON_EMAIL=hello@example.com
NEXT_PUBLIC_SALON_ADDRESS=Your correct salon address
NEXT_PUBLIC_SALON_INSTAGRAM=https://www.instagram.com/yourpage/
NEXT_PUBLIC_SALON_WHATSAPP=91XXXXXXXXXX
```

Environment values prefixed `NEXT_PUBLIC_` are **public** and must never contain secrets. Restart the dev server after changes. Never commit `.env.local`.

Update the salon name, services, and placeholder images in `lib/site.ts`. Brand assets are in `public/images`:
- `studio-a1-sign.webp` — provided original circular sign image
- `studio-a1-wall.webp` — provided original gold wall sign image
- `mj-emblem.png` — cropped circular emblem from the first uploaded photo, retaining the original logo composition
- `salon-hero-placeholder.webp` — AI-generated salon interior used as a clearly labelled hero placeholder; [generation details and prompt](docs/hero-image.md)

## Booking behavior (important)

The booking form **does not** actually submit or confirm an appointment. If a valid WhatsApp number is configured, it opens a prefilled message in WhatsApp for the visitor to send. Without a number, it copies the appointment enquiry to the clipboard or displays the enquiry text as fallback. The studio must confirm appointments directly.

The contact form opens an email draft if an address is configured; otherwise it copies the message. It does not send data to a server. The dashboard is a layout preview with zero values. It deliberately has no customer database, persistence, or authentication.

To add real bookings, implement a secured server API, authenticated staff dashboard, database, input validation, rate limiting, spam protection, authorization, and a privacy notice before accepting customer data.

## Content & media

Only the **two signage images** are images of the actual STUDIO A1 branding. The homepage hero uses a locally saved, **AI-generated interior placeholder**, not a photo of the real salon. Other service/gallery images reference public Unsplash assets as **illustrative stock placeholders** and may require internet connectivity. Replace with licensed, real portfolio photos before launch. Team role images are graphic placeholders until staff photos and names are provided.

Check all service details, packages, address, contact links, legal notices and operating hours with the salon before publishing. Site uses `noindex` and a disallow-all robots rule until these details are finalized; update `app/layout.tsx` and `app/robots.ts` before making the public website indexable.

## Suggested folder structure

```
app/                 # App Router routes, metadata, styles
components/          # Shared UI, animations, navbar, forms
lib/site.ts          # Site configuration + service/gallery content
lib/utils.ts         # Utilities
public/images/       # Original STUDIO A1 brand images
```
