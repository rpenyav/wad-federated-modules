const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "angularAppClients",
      library: { type: "var", name: "angularAppClients" },
      filename: "remoteEntry.js",
      exposes: {
        "./Component": "./src/app/app.component.ts",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ],
};
