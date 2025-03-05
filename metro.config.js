const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { FileStore } = require("@expo/metro-config/file-store");
const path = require("path");

const config = getDefaultConfig(__dirname);
config.cacheStores = [
  new FileStore({
    root: path.join(__dirname, "node_modules/.metro-cache"),
  }),
];

module.exports = withNativeWind(config, { input: "./global.css" });
