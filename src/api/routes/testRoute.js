const testController = require("../../interfaces/http/controllers/testController");

module.exports = [
  {
    method: "GET",
    path: "/api/test",
    handler: testController.hello,
  },
];
