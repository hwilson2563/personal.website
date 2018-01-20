var express = require("express");
var app = express();
var pg = require("pg");
var routes = require("./routes.js");
var bodyParser = require("body-parser");
var PgPool = require("node-pg-connection-pool");
	app.use(bodyParser.json());
	app.use(express.static(__dirname + "/public"));
	app.use("/", routes);

	app.listen(5000, function () {
console.log("Server is running on 5000");
});
