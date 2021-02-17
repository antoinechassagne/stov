const router = require("express").Router();
const users = require("./modules/users/routes");
const authentication = require("./modules/authentication/routes");
const checkSession = require("./middlewares/checkSession");

const routes = [...authentication, ...users];

routes.forEach((route) => {
  const { path, method, handler } = route;
  const middlewares = [];
  if (route.authenticated) {
    middlewares.push(checkSession);
  }
  router[method.toLowerCase()](path, ...middlewares, handler);
});

module.exports = { routes, router };
