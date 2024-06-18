const authController = require("../../interfaces/http/controllers/authController");
const { loginSchema } = require("../schemas/authSchemas");
const { createUserSchema } = require("../schemas/userSchemas");
const failAction = require("../../interfaces/http/middleware/failAction");
const userController = require("../../interfaces/http/controllers/userController");

module.exports = [
  {
    method: "POST",
    path: "/api/auth/login",
    handler: authController.login,
    options: {
      validate: {
        payload: loginSchema,
        failAction,
      },
    },
  },
  {
    method: "POST",
    path: "/api/auth/register",
    handler: userController.createUser,
    options: {
      validate: {
        payload: createUserSchema,
        failAction,
      },
    },
  },
];
