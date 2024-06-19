const articleService = require("../../../application/services/articleService");
const APIResponse = require("../../dtos/apiResponse");
const uploadImage = require("../middleware/uploadMiddleware");
const {
  createArticleSchema,
} = require("../../../api/schemas/articleSchemas.js");

class ArticleController {
  async createArticle(request, h) {
    const { error } = createArticleSchema.validate(request.payload);
    if (error) return h.response(APIResponse.error("Bad Request", error));

    const { title, description, author } = request.payload;
    let imageUrl = null;
    console.log(request.payload);

    if (request.payload.file) {
      try {
        imageUrl = await uploadImage(image);
      } catch (error) {
        console.debug(error);
        return h
          .response(APIResponse.error("Failed to add new article", error))
          .code(500);
      }
    }

    const article = await articleService.createArticle({
      title,
      description,
      imageUrl,
      author,
    });

    return h
      .response(APIResponse.success("Success add new article", article))
      .code(201);
  }
}

module.exports = new ArticleController();
