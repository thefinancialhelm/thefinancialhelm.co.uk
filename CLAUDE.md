# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Primary development workflow
```bash
# Install dependencies (use pnpm as recommended)
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Astro CLI commands
```bash
pnpm astro add      # Add integrations
pnpm astro check    # Type-check .astro files
pnpm astro --help   # Show all Astro CLI options
```

## Project Architecture

This is an Astro-based website using the Astroship Pro template, built with:
- **Astro v5** - Static site generator with file-based routing
- **TailwindCSS** - Utility-first CSS framework (pre-configured)
- **MDX** - For enhanced markdown content with component support
- **TypeScript** - With strict mode enabled

### Key directories and their purposes:

- `src/pages/` - File-based routing. Each `.astro` or `.md` file becomes a route
- `src/components/` - Reusable Astro components (hero, cta, features, etc.)
- `src/layouts/` - Page layout templates
- `src/content/` - Content collections for blog posts and team members, with Zod schemas defined in `config.ts`
- `src/assets/` - Images and static assets processed by Astro
- `public/` - Static files served directly without processing

### Path aliases configured in TypeScript:
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@assets/*` → `src/assets/*`
- `@utils/*` → `src/utils/*`
- `@lib/*` → `src/lib/*`
- `@pages/*` → `src/pages/*`

### Content Collections

The site uses Astro's content collections for structured content:
- **Blog posts** (`src/content/blog/`) - With frontmatter for draft status, title, snippet, images, dates, author, category, and tags
- **Team members** (`src/content/team/`) - With frontmatter for name, title, avatar, and publish date

### Configuration

- **astro.config.mjs** - Main Astro configuration with integrations (Tailwind, MDX, Icon, Sitemap)
- **tailwind.config.cjs** - TailwindCSS configuration
- **tsconfig.json** - TypeScript configuration extending Astro's strict preset

### Deployment

The project is configured for Vercel deployment (`@astrojs/vercel` integration installed).