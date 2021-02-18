const database = require("../../database/index");

exports.createTaskTemplate = function (taskTemplate) {
  return database("taskTemplates").insert(taskTemplate).returning("id");
};

exports.getTaskTemplate = function (query) {
  return new Promise(async (resolve, reject) => {
    try {
      const taskTemplate = await database("taskTemplates").where(query).first();
      const colocation = await database("colocations").where({ id: taskTemplate.colocationId }).first();
      Object.assign(taskTemplate, { colocation });
      resolve(taskTemplate);
    } catch (error) {
      reject(error);
    }
  });
};

exports.getTaskTemplates = function (query) {
  return new Promise(async (resolve, reject) => {
    try {
      const taskTemplates = database("taskTemplates").where(query);
      for (const taskTemplate of taskTemplates) {
        const colocation = await database("colocations").where({ id: taskTemplate.colocationId }).first();
        Object.assign(taskTemplate, { colocation });
      }
      resolve(taskTemplates);
    } catch (error) {
      reject(error);
    }
  });
};

exports.updateTaskTemplate = function (query, update) {
  return database("taskTemplates").where(query).update(update);
};

exports.deleteTaskTemplates = function (query) {
  return database("taskTemplates").where(query).del();
};
