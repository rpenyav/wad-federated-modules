const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  entry: "./main.js",
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        angularAppClients: "angularApp@http://localhost:4201/remoteEntry.js",
        angularAppUsers: "angularApp@http://localhost:4202/remoteEntry.js",
      },
    }),
  ],
};
