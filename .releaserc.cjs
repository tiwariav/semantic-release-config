const config = require("./index.cjs");

config.plugins[4] = "@semantic-release/npm";
module.exports = config;