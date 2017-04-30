//dependencies
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(error) {
  if (error) {
    console.error("There was an error connecting. " + error.stack);
    return;
  }
  console.log("Connected as ID #" + connection.threadId);
});

module.exports = connection;