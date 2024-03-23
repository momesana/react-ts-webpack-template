module.exports = {
  plugins: [
    "babel-plugin-styled-components",
    [
      "formatjs",
      {
        // keep in sync with lang/extract-messages.ts
        idInterpolationPattern: "[sha512:contenthash:base64:16]", // keep in sync with the hash used in extract script in package.json
      },
    ],
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "100",
        },
        useBuiltIns: "usage",
        corejs: "3.21.1",
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    [
      "@babel/preset-typescript",
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ],
};
