// tailwind.config.js
import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(avatar|button|card|chip|divider|dropdown|input|modal|progress|table|tabs|toast|popover|ripple|spinner|menu|form|checkbox|spacer).js"
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['"Fira Code"', '"Courier New"', 'monospace'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};