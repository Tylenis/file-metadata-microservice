"use strict";

var express = require("express");
var multer  = require("multer");
var routes = require("./app/routes/index.js");

var upload = multer({ dest: "uploads/" });

var app = express();


app.use("/public", express.static(process.cwd() + "/public"));
app.use(upload.single("userFile"));

routes(app);

app.listen(process.env.PORT);
console.log("server is running on "+process.env.PORT);