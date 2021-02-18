const database = require("../../database/index");

exports.createTask = function (task) {
  return database("tasks").insert(task).returning("id");
};

exports.getTask = function (query) {
  return new Promise(async (resolve, reject) => {
    try {
      const task = await database("tasks").where(query).first();
      const taskTemplate = await database("taskTemplates").where({ id: task.taskTemplateId }).first();
      const user = await database("users").where({ id: task.userId }).first();
      Object.assign(task, { taskTemplate, user });
      resolve(task);
    } catch (error) {
      reject(error);
    }
  });
};

exports.getTasks = function (query) {
  return new Promise(async (resolve, reject) => {
    try {
      const tasks = await database("tasks").where(query);
      for (const task of tasks) {
        const taskTemplate = await database("taskTemplates").where({ id: task.taskTemplateId }).first();
        const user = await database("users").where({ id: task.userId }).first();
        Object.assign(task, { taskTemplate, user });
      }
      resolve(tasks);
    } catch (error) {
      reject(error);
    }
  });
};

exports.updateTask = function (query, update) {
  return database("tasks").where(query).update(update);
};

exports.deleteTasks = function (query) {
  return database("tasks").where(query).del();
};
