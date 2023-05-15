/* eslint-env node */
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

const svgRules = [
  {
    test: /\.svg$/i,
    type: "asset",
    resourceQuery: /url/, // load *.svg?url as assets
  },
  {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/, /component/] }, // load *.svg as icon
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
    resourceQuery: /component/, // load *.svg?component as a component
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

function webpackConfig(_env, { mode = "development" }) {
  const isDevelopment = mode === "development";

  return {
    mode,
    devtool: isDevelopment ? "eval-source-map" : "source-map",
    entry: "./src/index.tsx",
    devServer: {
      hot: true,
      historyApiFallback: true,
    },
    output: {
      path: resolve(__dirname, "./dist"),
      filename: "main.js",
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                plugins: [isDevelopment && "react-refresh/babel"].filter(
                  Boolean
                ),
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        ...svgRules,
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve("src", "index.html"),
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
  };
}

export default webpackConfig;
