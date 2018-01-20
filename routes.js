var express = require("express");
var routes = express.Router();
var pool = require("./pg-connection-pool.js");

routes.delete("/", function(req, res) { 
	res.send("DELETE ​request​ ​successful");
	console.log("DELETE ​request​ ​successful");

});
routes.post("/", function(req, res){
	res.send("POST request​ ​successful");
	console.log("POST request​ ​successful");
});
routes.get("/about", function(req, res) { 
	res.send("GET ​request​ ​successful");
	console.log("GET ​request​ ​successful");

});
module.exports = routes;