import type { Preview } from "@storybook/react";
import GlobalStyle from "../src/globalStyles";
import { Decorator } from "@storybook/react";

export const decorators: Decorator[] = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
