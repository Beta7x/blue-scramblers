const articleController = require("../../interfaces/http/controllers/articleController");
const { createArticleSchema } = require("../schemas/articleSchemas");
const failAction = require("../../interfaces/http/middleware/failAction");

module.exports = [
  {
    method: "POST",
    path: "/api/articles",
    handler: articleController.createArtilce,
    options: {
      validate: {
        payload: createArticleSchema,
        failAction,
      },
    },
  },
];
