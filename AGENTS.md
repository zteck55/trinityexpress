# Trinity Express Project Guide

## Project Overview

Trinity Express is a responsive customer-facing website for cross-border bus travel, parcel delivery, route discovery, and direct booking assistance across East Africa. The site uses one public booking contact, `0753753266`, for calls and WhatsApp requests.

## Technology

- TanStack Start with React 19 and file-based routing
- TypeScript in strict mode
- Tailwind CSS 4 plus project-specific CSS in `src/styles.css`
- Lucide React for interface icons
- Netlify deployment through the TanStack Start Vite plugin

## Key Directories

- `src/routes/` contains page routes. `index.tsx` owns the complete single-page customer experience.
- `src/styles.css` contains global tokens, responsive layout rules, animation, and component styling.
- `public/assets/` contains the approved imagery derived from the supplied Trinity Express visual references.
- `.netlify/` contains build-system context and uploaded source material; do not expose its contents in the site.

## Architecture

The application is intentionally a single-page marketing and booking flow. Anchor navigation moves between services, routes, about, booking, and FAQ sections. Route filtering and booking selections use local React state. Final booking requests open WhatsApp with a prefilled message, so the website does not store personal data or collect payment.

## Conventions

- Use PascalCase for React components and camelCase for variables and helpers.
- Keep route and service data near the page until a second consumer requires extraction.
- Use Lucide icons instead of emoji or external icon images.
- Preserve the defined CSS tokens and the navy, route-blue, cream, and orange visual language.
- Maintain accessible labels, visible focus states, meaningful image alt text, and reduced-motion support.
- Do not add any public contact number, email address, or physical address other than `0753753266` unless the owner explicitly requests it.

## Non-obvious Decisions

- WhatsApp links use the international form of the approved local number in the URL while the interface displays only `0753753266`.
- Route prices and frequencies come from the uploaded Trinity Express references and should be confirmed by the booking agent.
- Booking remains agent-assisted rather than database-backed because no reservation persistence or online payment was requested.
