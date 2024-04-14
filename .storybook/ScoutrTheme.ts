import { create } from "@storybook/theming/create";

export default create({
  // Base theme
  base: "light",

  // Typography
  fontBase: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: "monospace",

  // Brand
  brandImage: "./logo-scoutr-for-storybook.svg",
  brandTarget: "_self",
  brandUrl: "https://scoutr-style-guide.web.app",

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
});
