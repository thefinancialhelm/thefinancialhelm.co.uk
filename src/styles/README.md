# The Financial Helm - Brand Colour Usage Guide

This guide explains how to use the new HSL-based colour system in your Astro components.

## Quick Reference

### Common Patterns

```astro
<!-- Main page background -->
<div class="bg-surface-primary">

<!-- Content container with subtle background -->
<div class="bg-surface-secondary">

<!-- Primary call-to-action button -->
<button class="bg-interactive-primary hover:bg-interactive-primary-hover text-content-inverse">
  Get Started
</button>

<!-- Secondary button -->
<button class="bg-interactive-secondary hover:bg-interactive-secondary-hover text-content-inverse">
  Learn More
</button>

<!-- Main heading text -->
<h1 class="text-content-primary">

<!-- Secondary/supporting text -->
<p class="text-content-secondary">

<!-- Muted text (captions, metadata) -->
<span class="text-content-tertiary">

<!-- Highlighted/accent text -->
<span class="text-content-accent">

<!-- Links -->
<a class="text-interactive-link hover:text-interactive-link-hover">

<!-- Borders and dividers -->
<div class="border border-border-light">
<hr class="border-border-medium">

<!-- Form inputs -->
<input class="border border-border-interactive focus:border-interactive-primary">
```

## Colour Categories

### Surface Colours (Backgrounds)
- `bg-surface-primary` - Main page background (white)
- `bg-surface-secondary` - Card/section backgrounds (warm off-white)
- `bg-surface-tertiary` - Subtle panel backgrounds (light warm grey)
- `bg-surface-accent` - Accent backgrounds (brand gold)
- `bg-surface-inverse` - Dark backgrounds (brand navy)

### Content Colours (Text)
- `text-content-primary` - Main text (dark charcoal)
- `text-content-secondary` - Supporting text (medium grey)
- `text-content-tertiary` - Muted text (light grey)
- `text-content-accent` - Highlighted text (brand gold)
- `text-content-inverse` - Text on dark backgrounds (white)

### Interactive Colours (Buttons, Links)
- `bg-interactive-primary` + `hover:bg-interactive-primary-hover` - Primary CTAs
- `bg-interactive-secondary` + `hover:bg-interactive-secondary-hover` - Secondary actions
- `text-interactive-link` + `hover:text-interactive-link-hover` - Links

### Border Colours
- `border-border-light` - Subtle dividers
- `border-border-medium` - Standard borders
- `border-border-strong` - Emphasized borders
- `border-border-accent` - Brand accent borders
- `border-border-interactive` - Form element borders

### Semantic Colours (Status/Feedback)
- `text-semantic-success` or `bg-semantic-success` - Success states
- `text-semantic-warning` or `bg-semantic-warning` - Warning states
- `text-semantic-error` or `bg-semantic-error` - Error states
- `text-semantic-info` or `bg-semantic-info` - Information states

## Transparency Support

All colours support Tailwind's opacity modifiers:

```astro
<!-- 50% opacity backgrounds -->
<div class="bg-brand-gold/50">
<div class="bg-surface-inverse/30">

<!-- Subtle overlays -->
<div class="bg-overlay-medium/60">

<!-- Transparent borders -->
<div class="border border-border-light/20">
```

## Pre-built Utility Classes

### Gradients
```astro
<div class="bg-gradient-gold">Gold gradient background</div>
<div class="bg-gradient-navy">Navy gradient background</div>
<h1 class="text-gradient-gold">Gold gradient text</h1>
```

### Shadows
```astro
<div class="shadow-brand">Subtle brand shadow</div>
<div class="shadow-brand-lg">Larger brand shadow</div>
<div class="shadow-brand-xl">Extra large brand shadow</div>
```

### Glass Effect
```astro
<div class="surface-glass">Glassmorphism effect</div>
```

## Component Examples

### Primary Button Component
```astro
<button class="
  bg-interactive-primary 
  hover:bg-interactive-primary-hover 
  active:bg-interactive-primary-active
  text-content-inverse
  px-6 py-3 
  rounded-lg 
  shadow-brand
  transition-colors
">
  {text}
</button>
```

### Card Component
```astro
<div class="
  bg-surface-secondary 
  border border-border-light 
  rounded-lg 
  shadow-brand
  p-6
">
  <h3 class="text-content-primary text-xl font-semibold mb-2">{title}</h3>
  <p class="text-content-secondary">{description}</p>
</div>
```

### Navigation Link
```astro
<a class="
  text-interactive-link 
  hover:text-interactive-link-hover
  transition-colors
  font-medium
" href={href}>
  {text}
</a>
```

## Migration Tips

### From Generic Tailwind Classes
- `text-gray-900` → `text-content-primary`
- `text-gray-600` → `text-content-secondary`
- `text-gray-400` → `text-content-tertiary`
- `bg-white` → `bg-surface-primary`
- `bg-gray-50` → `bg-surface-secondary`
- `border-gray-200` → `border-border-light`
- `bg-blue-600` → `bg-interactive-primary`

### Design System Benefits
1. **Consistency** - Everyone uses the same colour tokens
2. **Maintainability** - Change colours globally via CSS variables
3. **Accessibility** - Colours are tested for contrast ratios
4. **Theming** - Easy to add dark mode or alternative themes
5. **Semantic clarity** - Purpose is clear from class names

## Dark Mode Ready

The system includes CSS custom properties that can be easily overridden for dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --surface-primary: 207 68% 9%;
    --content-primary: 0 0% 95%;
    /* etc */
  }
}
```

Your components won't need to change - just the CSS variables.
