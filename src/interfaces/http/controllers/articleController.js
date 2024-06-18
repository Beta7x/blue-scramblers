const articleService = require("../../../application/services/articleService");
const APIResponse = require("../../dtos/apiResponse");

class ArticleController {
  async createArtilce(request, h) {
    try {
      const { title, description, image, author } = request.payload;
      const article = await articleService.createArticle({
        title,
        description,
        image,
        author,
      });

      return h
        .response(APIResponse.success("Success add new article", article))
        .code(201);
    } catch (error) {
      console.debug(error);
      return h
        .response(APIResponse.error("Failed to add new article", error))
        .code(500);
    }
  }
}

module.exports = new ArticleController();
