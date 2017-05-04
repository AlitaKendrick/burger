var connection = require('../config/connection.js');

var orm = {
   insertOne: function(tableInput, nameInput, callback) { 
      var newburger = "INSERT INTO " + tableInput + " (burger_name) VALUES (?)";
      connection.query(newburger, [nameInput], function(err, result) {
        if (err) throw err;
        callback(result);
      });
    },
  updateOne: function(tableInput, idInput, callback) {
      var newburger = "UPDATE " + tableInput + " SET devoured = 1  WHERE burger_name = ?";
      connection.query(newburger, [idInput], function(err, result) {
        if (err) throw err;
        callback(result);
      });
    },
  selectAll: function(cb) {
      var newburger = 'SELECT * FROM burgers';
      connection.query(newburger, function(err, result) {
        if (err) throw err;
        callback(result);
      });
    }
};

module.exports = orm;