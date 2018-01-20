//where we connect to our database
var pg = require("pg");
// these are important properties to have in your pool variables 
var pool = new pg.Pool({
	user: "postgres",
	password: "password",
	host:"localhost",
	port: 5432,
	database: "list",
	ssl: false
})
module.exports = pool;