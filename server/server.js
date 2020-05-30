var app = require("./app.js");
var config = require("../config.js");
const mongoose = require('mongoose'); 

var port = config.server.port;


mongoose.connect(config.connectionStrings.data)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:"+ port);

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


var server = app.listen(app.get(port), function() {
    console.log("Express server listening on port " + port);
  });