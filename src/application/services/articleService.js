const articleRepository = require("../../infrastructure/database/articleRepository");

class ArticleService {
  async createArticle(data) {
    return await articleRepository.createArticle(data);
  }
}

module.exports = new ArticleService();
