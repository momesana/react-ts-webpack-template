/* eslint-env node */
const unusedIgnorePattern = "^_";

module.exports = {
  extends: ["eslint:recommended", "plugin:storybook/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "@tanstack/query",
    "formatjs",
  ],
  rules: {
    curly: ["error", "all"],
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: unusedIgnorePattern,
        varsIgnorePattern: unusedIgnorePattern,
      },
    ],
    "no-extra-boolean-cast": "off",
    eqeqeq: "error",
    "formatjs/no-extra-boolean-cast": "off",
    "formatjs/enforce-default-message": "error",
    "formatjs/enforce-placeholders": "error",
    "formatjs/no-multiple-whitespaces": "error",
    "formatjs/no-multiple-plurals": "error",
    "formatjs/no-invalid-icu": "error",
    "formatjs/no-id": "error",
    "formatjs/no-offset": "error",
    "formatjs/no-complex-selectors": "error",
    "formatjs/no-useless-message": "error",
    "formatjs/prefer-formatted-message": "error",
    "formatjs/prefer-pound-in-plural": "error",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: ["./.eslintrc-typescript.cjs"],
    },
  ],
};
