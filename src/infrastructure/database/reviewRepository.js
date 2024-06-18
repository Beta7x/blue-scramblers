const prisma = require("./prismaClient");
const Review = require("../../domain/entities/Review");

class ReviewRepository {
  async createReview(data) {
    const review = await prisma.review.create({ data });
    return new Review(
      review.id,
      review.userId,
      review.travelId,
      review.rating,
      review.comment,
      review.createdAt,
      review.updatedAt,
    );
  }

  async getReviewById(id) {
    const review = await prisma.review.findUnique({ where: { id } });
    if (review) {
      return new Review(
        review.id,
        review.userId,
        review.travelId,
        review.rating,
        review.comment,
        review.createdAt,
        review.updatedAt,
      );
    }

    return null;
  }

  async updateReview(id, data) {
    const review = await prisma.review.update({
      where: { id },
      data,
    });

    return new Review(
      review.id,
      review.userId,
      review.travelId,
      review.rating,
      review.comment,
      review.createdAt,
      review.updatedAt,
    );
  }

  async getAllReview() {
    const reviews = await prisma.review.findMany({
      where: { isDelete: false },
    });

    return reviews.map(
      (review) =>
        new Review(
          review.id,
          review.userId,
          review.travelId,
          review.rating,
          review.comment,
          review.createdAt,
          review.updatedAt,
        ),
    );
  }

  async deleteReview(id) {
    await prisma.review.update({
      where: { id },
      data: {
        isDelete: true,
      },
    });
  }
}

module.exports = new ReviewRepository();
