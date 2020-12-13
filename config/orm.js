var connection = require("../config/connection.js");

var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function (tableInput, col, value, cb) {
    var queryString =
      "INSERT INTO " + tableInput + " (" + col + ") VALUES (?, ?);";
    connection.query(queryString, value, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function (tableInput, colVal, condition, cb) {
    var queryString =
      "UPDATE " + tableInput + " SET " + colVal + " WHERE " + condition + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
