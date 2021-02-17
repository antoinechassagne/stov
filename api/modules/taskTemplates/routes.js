const controller = require("./controller");

module.exports = [
  {
    method: "POST",
    path: "/taskTemplates",
    handler: controller.createTaskTemplate,
    authenticated: true,
  },
  {
    method: "GET",
    path: "/taskTemplates/:id",
    handler: controller.getTaskTemplate,
    authenticated: true,
  },
  {
    method: "GET",
    path: "/taskTemplates",
    handler: controller.getTaskTemplates,
    authenticated: true,
  },
  {
    method: "PUT",
    path: "/taskTemplates",
    handler: controller.updateTaskTemplate,
    authenticated: true,
  },
  {
    method: "DELETE",
    path: "/taskTemplates/:id",
    handler: controller.deleteTaskTemplate,
    authenticated: true,
  },
];
