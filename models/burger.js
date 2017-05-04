//need to require ORM
var orm = require("../config/orm.js");


var burgerdata = {
    allB: function(callback) {
          orm.selectAll("burgers", function(result) {
            callback(result);
        });
    },

    newB: function(vals, callback) {
        orm.insertOne("burgers", "burger_name", vals, function(result) {
            callback(result);
        });
    },

    devour: function(newInput, pageId, callback) {
        orm.updateOne("burgers", "devoured", newInput, "id", pageId, function(result) {
            callback(result);
        });
    }
};

//export db
module.exports = burgerdata;