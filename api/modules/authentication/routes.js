const controller = require("./controller");
const registerSchema = require("./schemas/register");
const loginSchema = require("./schemas/login");
const resetPasswordSchema = require("./schemas/resetPassword");

module.exports = [
  {
    method: "POST",
    path: "/register",
    handler: controller.register,
  },
  {
    method: "POST",
    path: "/login",
    handler: controller.login,
  },
  {
    method: "GET",
    path: "/logout",
    handler: controller.logout,
    authenticated: true,
  },
  {
    method: "GET",
    path: "/logged-user",
    handler: controller.getLoggedUser,
    authenticated: true,
  },
];
