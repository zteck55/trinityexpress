# Trinity Express

A polished, responsive travel website for Trinity Express. Visitors can explore cross-border services, search available regional routes, review fares and frequency, and prepare a booking request that opens directly with the Trinity Express agent on WhatsApp.

## Key Features

- Responsive single-page travel and delivery experience
- Searchable East African route cards
- Route, travel date, and passenger booking selector
- Direct WhatsApp and telephone booking actions using `0753753266`
- Supplied Trinity Express imagery integrated into the visual design
- Mobile navigation, FAQ disclosure panels, empty search state, and reduced-motion support

## Technology

- TanStack Start
- React 19 and TypeScript
- TanStack Router
- Tailwind CSS 4 with custom global styles
- Lucide React icons
- Netlify deployment adapter

## Local Development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The Vite development server runs on port `3000`. For Netlify platform emulation, use:

```bash
netlify dev --port 8889
```

## Project Structure

- `src/routes/index.tsx` — page content, route data, filtering, and booking interactions
- `src/routes/__root.tsx` — document metadata and application shell
- `src/styles.css` — design system, layouts, responsive states, and animation
- `public/assets/` — approved Trinity Express website imagery
- `netlify.toml` — Netlify build and local development settings

## Booking Flow

The site does not collect payment or store customer details. A visitor's selections are formatted into a prefilled WhatsApp message for direct confirmation with the booking agent.
