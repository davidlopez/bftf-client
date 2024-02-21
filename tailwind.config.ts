// const defaultTheme = require("tailwindcss/defaultTheme");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const svgToDataUri = require("mini-svg-data-uri");

// const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class",
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: "#6f7cb1",
  //       "primary-content": "#ffffff",
  //       "primary-dark": "#53619a",
  //       "primary-light": "#909ac3",
  //
  //       secondary: "#b1a06f",
  //       "secondary-content": "#15130c",
  //       "secondary-dark": "#9a8853",
  //       "secondary-light": "#c3b690",
  //
  //       background: "#14161f",
  //       foreground: "#1f222e",
  //       border: "#33384d",
  //
  //       copy: "#fafbfc",
  //       "copy-light": "#d1d4e0",
  //       "copy-lighter": "#949bb8",
  //
  //       success: "#6fb16f",
  //       warning: "#b1b16f",
  //       error: "#b16f6f",
  //
  //       "success-content": "#0c150c",
  //       "warning-content": "#15150c",
  //       "error-content": "#150c0c",
  //     },
  //   },
  // },
  theme: {
    extend: {
      colors: {
        primary: "#6f7cb1",
        "primary-content": "#ffffff",
        "primary-dark": "#53619a",
        "primary-light": "#909ac3",

        secondary: "#b1a46f",
        "secondary-content": "#15130c",
        "secondary-dark": "#9a8c53",
        "secondary-light": "#c3b990",

        background: "#efeff1",
        foreground: "#fbfbfb",
        border: "#dddee2",

        copy: "#232529",
        "copy-light": "#5e616e",
        "copy-lighter": "#848795",

        success: "#6fb16f",
        warning: "#b1b16f",
        error: "#b16f6f",

        "success-content": "#0c150c",
        "warning-content": "#15150c",
        "error-content": "#150c0c",

        "dm-primary": "#6f7cb1",
        "dm-primary-content": "#ffffff",
        "dm-primary-dark": "#53619a",
        "dm-primary-light": "#909ac3",

        "dm-secondary": "#b1a06f",
        "dm-secondary-content": "#15130c",
        "dm-secondary-dark": "#9a8853",
        "dm-secondary-light": "#c3b690",

        "dm-background": "#14161f",
        "dm-foreground": "#1f222e",
        "dm-border": "#33384d",

        "dm-copy": "#fafbfc",
        "dm-copy-light": "#d1d4e0",
        "dm-copy-lighter": "#949bb8",

        "dm-success": "#6fb16f",
        "dm-warning": "#b1b16f",
        "dm-error": "#b16f6f",

        "dm-success-content": "#0c150c",
        "dm-warning-content": "#15150c",
        "dm-error-content": "#150c0c",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/aspect-ratio"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
