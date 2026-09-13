const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#832B8C",
        pink: "#B34A72",
        cardBg: "#393430",
        cardBgHover: "#3B3939",
        lightTextColor: "#99908D",
        // Theme colors come from CSS variables in src/index.css, so light and dark share one set of classes.
        paper: "rgb(var(--paper) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        ink: { DEFAULT: "rgb(var(--ink) / <alpha-value>)", soft: "rgb(var(--ink-soft) / <alpha-value>)" },
        muted: { DEFAULT: "rgb(var(--muted) / <alpha-value>)", 2: "rgb(var(--muted-2) / <alpha-value>)" },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          ink: "rgb(var(--accent-ink) / <alpha-value>)",
          wash: "var(--accent-wash)",
        },
        "on-accent": "rgb(var(--on-accent) / <alpha-value>)",
        tick: "rgb(var(--tick) / <alpha-value>)",
        rule: {
          DEFAULT: "var(--rule)",
          soft: "var(--rule-soft)",
          strong: "var(--rule-strong)",
          dial: "var(--rule-dial)",
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        serif: ["Newsreader", "Georgia", "serif"],
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
