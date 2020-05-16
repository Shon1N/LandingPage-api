var app = require("./app.js").default;
var config = require("../config.js");


app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});


var server = app.listen(app.get(config.server.port), function() {
    console.log("Express server listening on port " + server.address().port);
    debug("Express server listening on port " + server.address().port);
  });