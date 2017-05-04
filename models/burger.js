//need to require ORM
var orm = require("../config/orm.js");


var burgerdata = {
    allB: function(callback) {
        orm.all('burgers', function (res) {
            callback(res);
        });
    },

    newB: function(vals, callback) {
        orm.create('burgers',column,values, function (res) {
            callback(res);        
        });
    },

    devour: function(newInput, pageId, callback) {
        orm.update('burgers', column, newValue, condition, function (res) {
            callback(res);
        });
    }
};

//export db
module.exports = burgerdata;