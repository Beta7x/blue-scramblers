const testController = require("../controllers/testController");

module.exports = [
  {
    method: "GET",
    path: "/api/test",
    handler: testController.hello,
  },
];
