const controller = require("./controller");

module.exports = [
  {
    method: "GET",
    path: "/tasks/:id",
    handler: controller.getTask,
    authenticated: true,
  },
  {
    method: "GET",
    path: "/tasks",
    handler: controller.getTasks,
    authenticated: true,
  },
];
