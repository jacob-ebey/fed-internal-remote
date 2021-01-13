const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

/** @type {import("webpack").Configuration} */
const config = {
  mode: "development",
  devtool: false,
  target: "node",
  entry: {
    main: ["./src/index.js"],
    "internal-load": {
      import: "./internal-load.js",
      library: {
        type: "commonjs",
      },
    },
  },
  externals: [{
    "internal-load": `promise new Promise((res, rej) => {
      const mod = require("./internal-load.js");
      mod.default.then(res, rej);
    })`
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
