const articleController = require("../../interfaces/http/controllers/articleController");
const multer = require("../../interfaces/http/middleware/multerMiddleware");

module.exports = [
  {
    method: "POST",
    path: "/api/articles",
    options: {
      payload: {
        output: "stream",
        parse: true,
        multipart: true,
        maxBytes: 2 * 1024 * 1024,
      },
      pre: [{ method: multer.single("image"), assign: "image" }],
      handler: articleController.createArticle,
    },
  },
];
