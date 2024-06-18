const userController = require("../../interfaces/http/controllers/userController");

module.exports = [
  {
    method: "POST",
    path: "/users",
    handler: userController.createUser.bind(userController),
  },
  {
    method: "GET",
    path: "/users/{id}",
    handler: userController.getUserById.bind(userController),
  },
];
