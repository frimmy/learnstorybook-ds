import React from "react";

import { GlobalStyle } from "../src/shared/global";

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // storybook a11y addon config
  a11y: {
    // the target DOM element
    element: "#root",
    // sets the execution mode for the addon
    manual: false,
  },
};
