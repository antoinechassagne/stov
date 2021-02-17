const { v4: uuidv4 } = require("uuid");
const database = require("../../database/index");

exports.createColocation = function (session) {
  return database("colocations")
    .insert({ id: uuidv4(), ...session })
    .returning("id");
};

exports.getColocation = function (query) {
  return database("colocations").where(query).first();
};

exports.getColocations = function (query) {
  return database("colocations").where(query);
};

exports.updateColocation = function (query, update) {
  return database("colocations").where(query).update(update);
};

exports.deleteColocations = function (query) {
  return database("colocations").where(query).del();
};
