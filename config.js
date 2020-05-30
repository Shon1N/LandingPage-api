
const server = {
    port: 3000
  };

  const urls = {
    homeRoot: "http://localhost:3000",
  }

let connectionStrings = {
      data : "mongodb://localhost:27017/LandingPage"
  };

  module.exports = {
    server: server,
    connectionStrings: connectionStrings,
    urls: urls,
};