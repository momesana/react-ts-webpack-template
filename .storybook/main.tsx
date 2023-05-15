import type { StorybookConfig } from "@storybook/react-webpack5";

import type { RuleSetRule } from "webpack";

function isRuleSetRule(rule: RuleSetRule | "..."): rule is RuleSetRule {
  return typeof rule === "object";
}

const svgRules = [
  {
    test: /\.svg$/i,
    type: "asset",
    resourceQuery: /url/, // load *.svg?url as assets
  },
  {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    // load as icon in the default case (neither url nor component as query param)
    resourceQuery: { not: [/url/, /component/] },
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          typescript: true,
          ref: true,
          title: true,
        },
      },
    ],
  },
  {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: /component/, // load *.svg as a react component
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: false,
          typescript: true,
          ref: true,
          title: true,
        },
      },
    ],
  },
];

const config: StorybookConfig = {
  webpackFinal: async (config, { configType }) => {
    const fileLoaderRule = config.module?.rules
      ?.filter(isRuleSetRule)
      .find(({ test }) => test && test instanceof RegExp && test.test(".svg"));
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }
    config.module?.rules?.push(...svgRules);
    return config;
  },

  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;
