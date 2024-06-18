class Review {
  constructor(id, userId, travelId, rating, comment, createdAt, updatedAt) {
    this.id = id;
    this.userId = userId;
    this.travelId = travelId;
    this.rating = rating;
    this.comment = comment;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Review;
