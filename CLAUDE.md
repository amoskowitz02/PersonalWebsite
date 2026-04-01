@AGENTS.md

# Personal Portfolio Website — Adam Moskowitz

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

Next.js 16 (App Router) + Tailwind CSS 4 + TypeScript

```
src/
  app/
    page.tsx              # Main page — assembles all section components
    layout.tsx            # Root layout — Navbar, Footer, BackgroundEffects
    globals.css           # Theme tokens, custom animations
    blog/                 # Blog listing + [slug] detail pages
    projects/[slug]/      # Project detail pages (SSG via generateStaticParams)
  components/
    Hero.tsx              # Landing section
    About.tsx             # Bio, profile photo, stats
    Skills.tsx            # JS-driven infinite scroll marquee (requestAnimationFrame)
    Projects.tsx          # Horizontal scrolling project cards
    Experience.tsx        # Alternating timeline layout
    Education.tsx         # Stevens + certifications
    Contact.tsx           # Inline form → Google Sheets
    Navbar.tsx            # Fixed nav, uses /#section links for cross-page navigation
    Footer.tsx            # Social links
    BackgroundEffects.tsx # Floating orbs + canvas sparkle particles
  data/
    projects.ts           # Project definitions (slug, description, tags, highlights)
    experience.ts         # Work experience entries
    skills.ts             # Skill categories for marquee rows
public/
  resume.pdf              # Downloadable resume
  images/                 # Profile photo, project screenshots
```

## Design System

- Dark theme: background `#0a0a0f`, surface `#111118`, border `#2a2a3a`
- Accent: purple scale (purple-300 for text highlights, purple-500/600 for buttons)
- All bold/highlighted text uses `text-purple-300 font-medium`
- Section headers: two words, white + purple (e.g., "About **Me**", "Tech **Stack**")
- CTA buttons: full-width `max-w-md`, purple-600 bg, `animate-subtle-pulse` class

## Key Patterns

**Adding a project:** Add entry to `src/data/projects.ts` — detail page auto-generates via `generateStaticParams`.

**Adding a blog post:** Currently hardcoded in `src/app/blog/page.tsx` posts array. Detail pages at `/blog/[slug]`.

**Icons:** Brand icons (GitHub, LinkedIn) use `react-icons/fa6`. UI icons use `lucide-react`.

**Images:** Use versioned filenames (e.g., `profile-v10.png`) to bust browser cache on updates.

**Nav links:** Use `/#section` format (not `#section`) so they work from `/blog` and `/projects/*` pages.

## External Integrations

- **Contact form** → Google Apps Script → Google Sheet (POST with `mode: "no-cors"`)
- Endpoint: configured in `Contact.tsx`

## Gotchas

- `lucide-react` has no GitHub/LinkedIn icons — must use `react-icons/fa6` for brand icons
- Skills marquee uses `requestAnimationFrame` with element recycling, not CSS animation (CSS caused snapping)
- Background particles use a canvas element sized to `scrollHeight` — resizes on window resize
- The Next.js dev toolbar (bottom-left icon) only appears in dev mode
- Browser Grammarly extension causes harmless hydration warnings on `<body>` tag
