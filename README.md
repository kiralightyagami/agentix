#  Agentix AI - Landing Page

> A modern, high-performance **AI Agent SaaS Landing Page Template** built to showcase frontend engineering, UI/UX aesthetics, responsive design, and interactive animations.

---

## Project Overview

**Agentix AI** is a landing page design template for an autonomous AI agent platform. This repository serves as a demonstrating modern web design practices, sophisticated component architecture, dynamic animations, and seamless light/dark theming.

Whether viewed as a portfolio piece or used as a foundation for an AI startup landing page, it highlights modern React and Next.js capabilities with polished visual hierarchy and micro-interactions.

---

## Showcase & Highlights

- **Modern Design System**: Tailored OKLCH color tokens, responsive typography, and custom multi-layered brand shadows.
- **Seamless Light & Dark Mode**: Full theme switching support powered by `next-themes` and custom CSS variables.
- **Interactive Card Skeletons**: Custom dynamic UI widgets showcasing feature workflows (Approval Queue, Guardrails Engine, Multi-Agent Orchestration, Audit Trail).
- **Smooth Motion & Micro-Interactions**: Fluid layout transitions, interactive accordions, animated tabs, and responsive drawer navigation powered by **Motion (Framer Motion v12)**.
- **Fully Responsive**: Mobile-first layout designed for crystal-clear readability and smooth touch interactions across all device viewports.
- **Clean Modular Architecture**: Component-driven structure organizing primary, secondary, and tertiary feature showcases cleanly.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) |
| **Language** | TypeScript |
| **UI & Components** | React 19, [shadcn/ui](https://ui.shadcn.com), [Base UI](https://base-ui.com) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com), `tw-animate-css` |
| **Animations** | [Motion](https://motion.dev) (Framer Motion v12) |
| **Icons** | [Tabler Icons](https://tabler.io/icons), [Lucide React](https://lucide.dev) |
| **Typography** | Inter, Manrope (via `next/font`) |
| **Theming** | `next-themes` (Light / Dark / System) |
| **Package Manager** | [Bun](https://bun.sh) / npm |

---

## Project Structure

```
agenix/
├── public/                    # Static assets (images, logos, SVGs)
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind CSS v4 config, OKLCH tokens, theme rules
│   │   ├── layout.tsx         # Root layout (fonts, theme provider, navbar, footer)
│   │   └── page.tsx           # Main landing page assembling all sections
│   ├── components/
│   │   ├── ui/                # UI primitives (buttons, inputs, cards)
│   │   ├── features/          # Primary feature cards with interactive skeletons
│   │   ├── features-secondary/# Agent Studio & Orchestration section
│   │   ├── features-tertiary/ # Audit, RBAC, Approvals, Guardrails section
│   │   ├── hero.tsx           # Hero section with dynamic CTAs
│   │   ├── navbar.tsx         # Responsive navbar with animated mobile menu
│   │   ├── footer.tsx         # Footer with newsletter, links, theme switch
│   │   ├── logo-cloud.tsx     # Animated trusted-by logo cloud
│   │   ├── pricing.tsx        # Pricing tier cards
│   │   ├── faqs.tsx           # Interactive FAQ accordion
│   │   ├── speed.tsx          # Performance & speed highlight section
│   │   └── outcomes.tsx       # Outcome metrics section
│   ├── icons/                 # Custom SVG icon components
│   ├── illustrations/         # SVG illustrative graphic components
│   ├── lib/                   # Utilities & class name merger (`cn`)
│   └── providers/             # React context & theme providers
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) ≥ 18
- [Bun](https://bun.sh) (recommended) or npm / pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kiralightyagami/agentix.git
cd agentix

# Install dependencies
bun install
# or
npm install
```

### Run Locally

```bash
bun run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the landing page.

---

## License

This project is created for showcase and frontend demonstration purposes.

---

<p align="center">
  <strong>Agentix AI</strong> - Modern Landing Page Template & Frontend Showcase
</p>
