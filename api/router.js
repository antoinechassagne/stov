const router = require("express").Router();
const users = require("./modules/users/routes");
const authentication = require("./modules/authentication/routes");
const colocations = require("./modules/colocations/routes");
const tasks = require("./modules/tasks/routes");
const taskTemplates = require("./modules/taskTemplates/routes");
const checkSession = require("./middlewares/checkSession");

const routes = [...authentication, ...users, ...colocations, ...tasks, ...taskTemplates];

routes.forEach((route) => {
  const { path, method, handler } = route;
  const middlewares = [];
  if (route.authenticated) {
    middlewares.push(checkSession);
  }
  router[method.toLowerCase()](path, ...middlewares, handler);
});

module.exports = { routes, router };
