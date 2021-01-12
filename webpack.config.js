const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

/** @type {import("webpack").Configuration} */
const config = {
  devtool: false,
  target: "node",
  externals: [{
    "internal-load": "commonjs ../internal-load.js"
  }],
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        fed: "internal internal-load",
      },
    }),
  ],
};

module.exports = config;
