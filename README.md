# AL-Manshur Islamic Center — Website

A React + Vite company-profile website for an Islamic Center, built per the
provided PRD. Frontend-only MVP using mock data (no backend required).

## Getting started

    npm install
    npm run dev       # start local dev server
    npm run build     # production build -> dist/
    npm run preview   # preview the production build locally

## Structure

- src/components/ - reusable UI building blocks (Navbar, Footer, Hero, cards, etc.)
- src/pages/ - one file per route (Home, About, Programs, Events, Articles, Gallery, Donation, Contact)
- src/data/mockData.js - all mock content (programs, events, articles, gallery, leadership, timeline, prayer times, stats). Replace this file's exports with real API calls when migrating to a backend.
- src/styles/tokens.css - design tokens (color, type, spacing) and base/reset styles
- src/styles/layout.css - shared layout utilities (grids, page-hero, detail-page styles)

## Design system

- Colors: warm off-white background, charcoal ink, deep green primary accent, muted gold secondary accent
- Type: Fraunces (serif, display/headlines) + Work Sans (sans, body/UI)
- Layout: editorial, generous whitespace, minimal card usage, no gradients

## Notes for future backend migration

Per the PRD, this MVP intentionally has no auth, database, payment gateway,
or CMS. src/data/mockData.js is structured so each export maps cleanly to a
future REST resource (e.g. programs -> GET /api/programs) when the stack
grows into React + Laravel + MySQL.

The Donation page is informational only (bank transfer + QRIS placeholder),
per MVP scope in the PRD.
