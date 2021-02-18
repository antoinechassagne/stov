const database = require("../../database/index");

exports.getPublicFields = function (user) {
  if (!user) {
    return null;
  }
  const { password, salt, ...publicFields } = user;
  return publicFields;
};

exports.createUser = function (user) {
  return database("users").insert(user).returning("id");
};

exports.getUser = function (query) {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await database("users").where(query).first();
      if (!user) {
        return resolve(null);
      }
      const colocation = await database("colocations").where({ id: user.colocationId }).first();
      const tasks = await database("tasks").where({ userId: user.id });
      Object.assign(user, { colocation, tasks });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

exports.getUsers = function (query) {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await database("users").where(query);
      for (const user of users) {
        const colocation = await database("colocations").where({ id: user.colocationId }).first();
        const tasks = await database("tasks").where({ userId: user.id });
        Object.assign(user, { colocation, tasks });
      }
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

exports.updateUser = function (query, update) {
  return database("users").where(query).update(update);
};

exports.deleteUsers = function (query) {
  return database("users").where(query).del();
};
