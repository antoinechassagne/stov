const controller = require("./controller");

module.exports = [
  {
    method: "GET",
    path: "/users",
    handler: controller.getUsers,
    authenticated: true,
  },
];
