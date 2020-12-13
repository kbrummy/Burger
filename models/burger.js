var orm = require("../config/orm.js");

var eatyoburgers = {
  all: function (cb) {
    orm.all("eatyoburgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, value, cb) {
    orm.insertOne("eatyoburgers", cols, value, function (res) {
      cb(res);
    });
  },
  updateOne: function (colVals, condition, cb) {
    orm.updateOne("eatyoburgers", colVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = eatyoburgers;
