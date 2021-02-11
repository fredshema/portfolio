"use strict";
const glob = require("glob");
const pages = {};

glob.sync("./src/pages/**/app.js").forEach((path) => {
  const chunk = path.split("./src/pages/")[1].split("/app.js")[0];
  pages[chunk] = {
    entry: path,
    template: "public/index" + chunk + ".html",
    title: chunk,
    chunks: ["chunk-vendors", "chunk-common", chunk],
  };
});
module.exports = {
  pages,
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
    config.plugins.delete("named-chunks");
  },
  devServer: {
    host: "localhost",
  },
};
