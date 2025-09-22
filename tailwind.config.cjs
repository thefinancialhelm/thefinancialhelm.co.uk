/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Brand colours
        'brand-navy': 'hsl(var(--brand-navy) / <alpha-value>)',
        'brand-gold': 'hsl(var(--brand-gold) / <alpha-value>)',
        'brand-gold-light': 'hsl(var(--brand-gold-light) / <alpha-value>)',
        'brand-cream': 'hsl(var(--brand-cream) / <alpha-value>)',

        // Surface colours (backgrounds)
        'surface-primary': 'hsl(var(--surface-primary) / <alpha-value>)',
        'surface-secondary': 'hsl(var(--surface-secondary) / <alpha-value>)',
        'surface-tertiary': 'hsl(var(--surface-tertiary) / <alpha-value>)',
        'surface-accent': 'hsl(var(--surface-accent) / <alpha-value>)',
        'surface-inverse': 'hsl(var(--surface-inverse) / <alpha-value>)',

        // Content colours (text)
        'content-primary': 'hsl(var(--content-primary) / <alpha-value>)',
        'content-secondary': 'hsl(var(--content-secondary) / <alpha-value>)',
        'content-tertiary': 'hsl(var(--content-tertiary) / <alpha-value>)',
        'content-accent': 'hsl(var(--content-accent) / <alpha-value>)',
        'content-inverse': 'hsl(var(--content-inverse) / <alpha-value>)',

        // Interactive colours (buttons, links)
        'interactive-primary': 'hsl(var(--interactive-primary) / <alpha-value>)',
        'interactive-primary-hover': 'hsl(var(--interactive-primary-hover) / <alpha-value>)',
        'interactive-primary-active': 'hsl(var(--interactive-primary-active) / <alpha-value>)',
        'interactive-secondary': 'hsl(var(--interactive-secondary) / <alpha-value>)',
        'interactive-secondary-hover': 'hsl(var(--interactive-secondary-hover) / <alpha-value>)',
        'interactive-secondary-active': 'hsl(var(--interactive-secondary-active) / <alpha-value>)',
        'interactive-link': 'hsl(var(--interactive-link) / <alpha-value>)',
        'interactive-link-hover': 'hsl(var(--interactive-link-hover) / <alpha-value>)',
        'interactive-link-visited': 'hsl(var(--interactive-link-visited) / <alpha-value>)',

        // Border colours
        'border-light': 'hsl(var(--border-light) / <alpha-value>)',
        'border-medium': 'hsl(var(--border-medium) / <alpha-value>)',
        'border-strong': 'hsl(var(--border-strong) / <alpha-value>)',
        'border-accent': 'hsl(var(--border-accent) / <alpha-value>)',
        'border-interactive': 'hsl(var(--border-interactive) / <alpha-value>)',

        // Semantic colours
        'semantic-success': 'hsl(var(--semantic-success) / <alpha-value>)',
        'semantic-warning': 'hsl(var(--semantic-warning) / <alpha-value>)',
        'semantic-error': 'hsl(var(--semantic-error) / <alpha-value>)',
        'semantic-info': 'hsl(var(--semantic-info) / <alpha-value>)',

        // Shadow and overlay base colours (use with opacity)
        'shadow-subtle': 'hsl(var(--shadow-subtle) / <alpha-value>)',
        'shadow-medium': 'hsl(var(--shadow-medium) / <alpha-value>)',
        'shadow-strong': 'hsl(var(--shadow-strong) / <alpha-value>)',
        'overlay-light': 'hsl(var(--overlay-light) / <alpha-value>)',
        'overlay-medium': 'hsl(var(--overlay-medium) / <alpha-value>)',
        'overlay-dark': 'hsl(var(--overlay-dark) / <alpha-value>)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // Brand gradients
        "gradient-gold": "linear-gradient(135deg, hsl(var(--brand-gold)), hsl(var(--brand-gold-light)))",
        "gradient-navy": "linear-gradient(135deg, hsl(var(--brand-navy)), hsl(var(--interactive-secondary)))",
      },
      boxShadow: {
        // Brand-specific shadows
        'brand': '0 1px 3px hsla(var(--shadow-subtle) / 0.12), 0 1px 2px hsla(var(--shadow-subtle) / 0.24)',
        'brand-lg': '0 10px 15px -3px hsla(var(--shadow-medium) / 0.1), 0 4px 6px -2px hsla(var(--shadow-medium) / 0.05)',
        'brand-xl': '0 20px 25px -5px hsla(var(--shadow-strong) / 0.1), 0 10px 10px -5px hsla(var(--shadow-strong) / 0.04)',
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
