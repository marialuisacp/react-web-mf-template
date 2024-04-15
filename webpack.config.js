const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv = {}) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "be-web-mf",
    projectName: "template",
    webpackConfigEnv,
  });

  const config = merge(defaultConfig, {});

  return config;
};