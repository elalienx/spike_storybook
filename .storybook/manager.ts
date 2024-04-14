/**
 * About:
 * This is the theme manager for Storybook.
 * So our component viewer has the Scoutr brand style.
 */

// Node modules
import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    // Base theme
    base: "light",

    // Brand
    brandImage: "./logo-scoutr-for-storybook.svg",
    brandTarget: "_self",
    brandUrl: "https://scoutr-style-guide.web.app",

    // Typography
    fontBase: '"Helvetica Neue", "Helios2", Helvetica, Arial, sans-serif',
    fontCode: '"Menlo", "Monaco", monospace"',

    // Colors
    appBg: "#E6E9EB", // Scoutr Ink black light
    appBorderColor: "#A9A9A9", // Scoutr Silver gray
    barTextColor: "#212529", // Scoutr Ink black
    colorSecondary: "#265889", // Scoutr Ocean blue
    textColor: "#212529", // Scoutr Ink black

    // Form colors
    inputBg: "#A9A9A9", // Scoutr Silver gray
    inputBorder: "#A9A9A9", // Scoutr Silver gray
    inputTextColor: "#212529", // Scoutr Ink black
  }),
});
