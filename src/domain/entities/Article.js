class Article {
  constructor(id, title, description, image, author, createdAt, updatedAt) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.author = author;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Article;
