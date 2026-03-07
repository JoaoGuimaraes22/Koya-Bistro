# Koya's Bistro Website

Next.js 16 single-page restaurant website for Koya's Bistro (Carcavelos, Portugal).

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (postcss plugin, no tailwind.config)
- **i18n:** Custom locale routing (`[locale]`) with `en` and `pt` dictionaries
- **Forms:** Formspree (ID: `mykdkndo`)
- **Deployment:** Static export (SSG)

## Project Structure

```files
app/[locale]/page.tsx          — Single page: Hero, About, Menu, Contact, Footer
app/components/
  Navbar/Navbar.tsx            — Fixed nav, mobile hamburger, locale switcher
  HeroContent/HeroContent.tsx  — Animated hero with CTAs + Uber Eats links
  About/About.tsx              — Restaurant story + stats (server component)
  Menu/Menu.tsx                — Tabbed menu (6 categories, 80+ items)
  Contact/Contact.tsx          — Info + map + Book a Table card (opens modal)
  Reservation/Reservation.tsx  — Full-screen modal: guests, calendar, times, Formspree submit
  Footer/Footer.tsx            — Links + social (server component)
  OrderBar/OrderBar.tsx        — Sticky mobile Uber Eats bar
  FadeIn/FadeIn.tsx            — Scroll-triggered animation wrapper
dictionaries/en.json           — English translations
dictionaries/pt.json           — Portuguese translations
get-dictionary.ts              — Async dictionary loader
i18n-config.ts                 — Locale config (en, pt)
proxy.ts                       — Middleware for locale detection
public/img/                    — hero.jpg, about.jpg, reserve.jpg
```

## Key Patterns

- Components receive typed `dict` props for i18n — no global state
- Navbar Reserve button dispatches `window.dispatchEvent(new Event("open-reservation"))` custom event; Contact listens for it to open the Reservation modal
- Reservation modal: full-screen overlay with calendar picker, time slots, guest selector, Formspree submission
- Color scheme: `amber-500` accent, `zinc-*` neutrals, dark sections use `zinc-950`
- Font: Inter (body), Georgia/Palatino (`.font-serif`)
- Mobile-first responsive with `sm:` / `md:` breakpoints

## Commands

```bash
npm run dev       # Dev server
npm run build     # Production build
npm run lint      # ESLint
```
