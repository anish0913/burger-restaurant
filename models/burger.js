// ORM connecting to database
var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectItems("burgers", function (res) {
            cb(res);
        });
    },
    create: function (val, cb) {
        orm.insertItem("burgers", "burger_name", val, function (res) {
            cb(res);
        });
    },
    update: function (colVal, condition, cb) {
        orm.updateItem("burgers", colVal, condition, function (res) {
            cb(res);
        });
    },
};

// Exporting the database 
module.exports = burger;