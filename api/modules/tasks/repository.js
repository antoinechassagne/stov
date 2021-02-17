const database = require("../../database/index");

exports.createTask = function (task) {
  return database("tasks").insert(task).returning("id");
};

exports.getTask = function (query) {
  return database("tasks").where(query).first();
};

exports.getTasks = function (query) {
  return database("tasks").where(query);
};

exports.updateTask = function (query, update) {
  return database("tasks").where(query).update(update);
};

exports.deleteTasks = function (query) {
  return database("tasks").where(query).del();
};
