const controller = require("./controller");

module.exports = [
  {
    method: "POST",
    path: "/colocations",
    handler: controller.createColocation,
    authenticated: true,
  },
  {
    method: "GET",
    path: "/colocations/:id",
    handler: controller.getColocation,
    authenticated: true,
  },
  {
    method: "GET",
    path: "/colocations",
    handler: controller.getColocations,
    authenticated: true,
  },
];
