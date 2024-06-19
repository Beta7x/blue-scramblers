const Travel = require("../../domain/entities/Travel");
const prisma = require("./prismaClient");

class TravelRepository {
  async createTravel(data) {
    const travel = await prisma.travel.create({ data });

    return new Travel(
      travel.id,
      travel.name,
      travel.price,
      travel.imageUrl,
      travel.description,
      travel.location,
      travel.createdAt,
      travel.updatedAt,
    );
  }

  async getTravelById(id) {
    const travel = await prisma.travel.findFirst({
      where: { id, AND: { isDelete: false } },
    });
    if (travel) {
      return new Travel(
        travel.id,
        travel.name,
        travel.price,
        travel.image,
        travel.description,
        travel.location,
        travel.createdAt,
        travel.updatedAt,
      );
    }

    return null;
  }

  async updateTravel(id, data) {
    const travel = await prisma.travel.update({
      where: { id },
      data,
    });

    return new Travel(
      travel.id,
      travel.name,
      travel.price,
      travel.image,
      travel.description,
      travel.location,
      travel.createdAt,
      travel.updatedAt,
    );
  }

  async getAllTravel() {
    const travels = await prisma.travel.findMany({
      where: { isDelete: false },
    });

    return travels.map(
      (travel) =>
        new Travel(
          travel.id,
          travel.name,
          travel.price,
          travel.image,
          travel.description,
          travel.location,
          travel.createdAt,
          travel.updatedAt,
        ),
    );
  }

  async deleteTravel(id) {
    await prisma.travel.update({
      where: { id },
      data: { isDelete: true },
    });

    return true;
  }
}

module.exports = new TravelRepository();
