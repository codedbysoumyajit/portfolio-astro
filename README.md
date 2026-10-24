# Soumyajit Das — Personal Portfolio Website

A personal portfolio website for **Soumyajit Das**, full-stack developer passionate about backend systems, Go, privacy-first software, developer tools, and open source.

Built with **Astro 5**, **TypeScript**, and **Tailwind CSS v4**. Optimized for static-first performance, accessible dark/light theming, and deployment on **Cloudflare Pages**.

---

## 🛠️ Technology Stack

- **Framework:** [Astro](https://astro.build/) (Static Site Generation)
- **Language:** TypeScript (Strict Mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens
- **Typography:** Inter (Sans-serif) & JetBrains Mono (Monospace)
- **Icons:** Inline SVG icons (zero external icon library bloat)
- **SEO & Metadata:** Automated XML Sitemap (`@astrojs/sitemap`), Open Graph, Twitter Cards, robots.txt, and Web Manifest
- **Target Hosting:** Cloudflare Pages (with zero-config static export)

---

## ✨ Features

- **Developer-First Dark Identity:** Deep midnight palette (`#080c16`) with electric cyan (`#22d3ee`) and violet accents, atmospheric lighting, and subtle dot-grid texturing.
- **Dynamic Theming:** Seamless dark/light theme switching with local storage persistence and system preference sync.
- **Command Palette (`⌘K` / `Ctrl+K`):** Fast keyboard-driven modal to jump between sections, copy email, toggle theme, or open repositories.
- **Interactive Architecture Schematics:** Visual diagrams for zero-knowledge encryption (Argon2id + AES-256-GCM), streaming file pipelines, and Go terminal interfaces.
- **One-Click Clone Commands:** Copy `git clone` commands directly for featured projects.
- **Verified Credentials:** Authenticated Credly links for certifications across IBM, Cisco, and the Linux Foundation.
- **Live Local Time Widget:** Real-time Indian Standard Time (IST, UTC+5:30) clock.
- **Accessibility & Motion:** Semantic landmarks, skip-to-content link, WCAG-compliant contrast ratios, and `prefers-reduced-motion` compliance.

---

## 📁 Project Structure

```text
├── public/
│   ├── favicon.svg             # Custom monogram SVG favicon
│   ├── robots.txt              # Search engine directives & sitemap reference
│   └── site.webmanifest        # Progressive web application manifest
├── src/
│   ├── components/
│   │   ├── About.astro         # Bio, engineering tenets, currently exploring
│   │   ├── BackToTop.astro     # Floating scroll-to-top button
│   │   ├── Certifications.astro# Verified Credly badges grid
│   │   ├── CommandPalette.astro# Accessible Cmd+K command menu
│   │   ├── Contact.astro       # Direct contact, Proton email copy, IST clock
│   │   ├── Footer.astro        # Navigation links, credits, copyright
│   │   ├── Hero.astro          # Headline, value prop, architecture schematic
│   │   ├── Navbar.astro        # Sticky glass header, active spy, theme toggle
│   │   ├── Projects.astro      # Editorial project showcase & interactive flows
│   │   └── Skills.astro        # Categorized tools with domain filtering
│   ├── data/
│   │   └── site.ts             # Central typed configuration file for all content
│   ├── layouts/
│   │   └── Layout.astro        # HTML shell, SEO tags, reading progress bar
│   ├── pages/
│   │   ├── 404.astro           # Custom technical 404 error page
│   │   └── index.astro         # Main landing page
│   └── styles/
│       └── global.css          # Design system variables, Tailwind v4 theme, animations
├── astro.config.mjs            # Astro configuration with sitemap integration
├── package.json
└── tsconfig.json
```

---

## ⚙️ Content Configuration

All personal information, social links, project highlights, skills, and certifications are managed centrally in:

```
src/data/site.ts
```

To update any content (such as adding a project demo link, changing the availability status, or adding an active exploratory topic), modify the typed exported structures in `site.ts`.

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v22.12.0` or higher
- npm `10.x` or higher

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

In accordance with project guidelines, launch the dev server in background mode:

```bash
astro dev --background
```

Manage the server process:
```bash
astro dev status   # Check server health and port
astro dev logs     # View live server output
astro dev stop     # Terminate the server
```

Or run interactively in the foreground:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### 3. Build for Production

```bash
npm run build
```

This compiles static HTML, CSS, JavaScript, and XML sitemaps to the `./dist/` directory.

### 4. Preview the Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

### Cloudflare Pages (Recommended)

1. Connect your GitHub repository to Cloudflare Pages.
2. Configure build settings:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** Set environment variable `NODE_VERSION = 22.12.0`

### Vercel / Netlify / Static Hosting

Because this project generates static HTML:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `⌘K` or `Ctrl+K` | Open Command Palette |
| `T` | Toggle Dark / Light Theme |
| `Esc` | Close Modal / Command Palette |

---

## 📄 License

MIT &copy; [Soumyajit Das](https://codedbysoumyajit.dev)
