const path = require("path");

const ExtractCSS = require("mini-css-extract-plugin");

const autoprefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");
const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          ExtractCSS.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      overrideBrowserslist: "cover 99.5%",
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};

module.exports = config;