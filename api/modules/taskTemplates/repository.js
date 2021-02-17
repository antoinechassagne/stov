const database = require("../../database/index");

exports.createTaskTemplate = function (taskTemplate) {
  return database("taskTemplates").insert(taskTemplate).returning("id");
};

exports.getTaskTemplate = function (query) {
  return database("taskTemplates").where(query).first();
};

exports.getTaskTemplates = function (query) {
  return database("taskTemplates").where(query);
};

exports.updateTaskTemplate = function (query, update) {
  return database("taskTemplates").where(query).update(update);
};

exports.deleteTaskTemplates = function (query) {
  return database("taskTemplates").where(query).del();
};
