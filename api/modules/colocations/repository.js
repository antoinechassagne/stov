const { v4: uuidv4 } = require("uuid");
const database = require("../../database/index");

exports.createColocation = function (session) {
  return database("colocations")
    .insert({ id: uuidv4(), ...session })
    .returning("id");
};

exports.getColocation = function (query) {
  return new Promise(async (resolve, reject) => {
    try {
      const colocation = await database("colocations").where(query).first();
      const taskTemplates = await database("taskTemplates").where({ colocationId: colocation.id });
      const taskTemplateIds = taskTemplates ? taskTemplates.map((template) => template.id) : [];
      const tasks = await database("tasks").whereIn("id", taskTemplateIds);
      const users = await database("users").where({ colocationId: colocation.id });
      Object.assign(colocation, { taskTemplates, tasks, users });
      resolve(task);
    } catch (error) {
      reject(error);
    }
  });
};

exports.getColocations = function (query) {
  return new Promise(async (resolve, reject) => {
    try {
      const colocations = await database("colocations").where(query);
      for (const colocation of colocations) {
        const taskTemplates = await database("taskTemplates").where({ colocationId: colocation.id });
        const taskTemplateIds = taskTemplates ? taskTemplates.map((template) => template.id) : [];
        const tasks = await database("tasks").whereIn("id", taskTemplateIds);
        const users = await database("users").where({ colocationId: colocation.id });
        Object.assign(colocation, { taskTemplates, tasks, users });
      }
      resolve(colocations);
    } catch (error) {
      reject(error);
    }
  });
};

exports.updateColocation = function (query, update) {
  return database("colocations").where(query).update(update);
};

exports.deleteColocations = function (query) {
  return database("colocations").where(query).del();
};
