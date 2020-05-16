const express = require("express");
const app = express();
import path from "path";
import fs from "fs";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const SIZE_LIMIT = "5mb";
const PARAMETER_LIMIT = 10000;
app.set("view engine", "pug");
app.use(
  bodyParser.raw({
    verify: rawBodySaver,
    type: "application/octet-stream",
    limit: SIZE_LIMIT
  })
);
app.use(bodyParser.json({ verify: rawBodySaver, limit: SIZE_LIMIT }));
app.use(
  bodyParser.urlencoded({
    verify: rawBodySaver,
    extended: false,
    limit: SIZE_LIMIT,
    parameterLimit: PARAMETER_LIMIT
  })
);
app.use(cookieParser());


export{
    express,
    app,        
}