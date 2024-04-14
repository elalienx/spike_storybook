// Node modules
import type { Preview } from "@storybook/react";
import ScoutrTheme from "./ScoutrTheme";

const preview: Preview = {
  parameters: {
    docs: {
      theme: ScoutrTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
