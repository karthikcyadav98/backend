const { ProdEnvironment } = require("./prod.env");
const { DevEnvironment } = require("./dev.env");
function getEnvironmentVariables() {
  if (process.env.NODE_ENV == "production") {
    return ProdEnvironment;
  }

  return DevEnvironment;
}
module.exports = getEnvironmentVariables;
