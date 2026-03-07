# Koya's Bistro

Single-page restaurant website for **Koya's Bistro** in Carcavelos, Portugal.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **i18n:** Custom locale routing (`[locale]`) with `en` and `pt` dictionaries
- **Forms:** Formspree
- **Deployment:** Static export (SSG)

## Getting Started

```bash
npm install
npm run dev       # Dev server (http://localhost:3000)
npm run build     # Production build
npm run lint      # ESLint
```

## Project Structure

```text
app/
  [locale]/page.tsx              Single page entry point
  components/
    Navbar/Navbar.tsx             Fixed nav, mobile hamburger, locale switcher
    HeroContent/HeroContent.tsx   Animated hero with CTAs
    ParallaxHero/ParallaxHero.tsx Parallax background image
    About/About.tsx               Restaurant story + stats
    Menu/Menu.tsx                 Tabbed menu (6 categories)
    Contact/Contact.tsx           Info, map, reservation modal
    Reservation/Reservation.tsx   Full-screen booking modal
    Footer/Footer.tsx             Links + social
    OrderBar/OrderBar.tsx         Sticky mobile Uber Eats bar
    FadeIn/FadeIn.tsx             Scroll-triggered animation wrapper
dictionaries/
  en.json                        English translations
  pt.json                        Portuguese translations
public/img/                      Static images
```
