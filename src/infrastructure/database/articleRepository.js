const Article = require("../../domain/entities/Article");
const prisma = require("./prismaClient");

class ArticleRepository {
  async createArticle(data) {
    const article = await prisma.article.create(data);
    return new Article(
      article.id,
      article.title,
      article.description,
      article.image,
      article.author,
      article.createdAt,
      article.updatedAt,
    );
  }
}

module.exports = new ArticleRepository();
