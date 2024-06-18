const prisma = require("./prismaClient");
const User = require("../../domain/entities/User");

class UserRepository {
  async createUser(data) {
    const user = await prisma.user.create({ data });
    return new User(
      user.id,
      user.email,
      user.name,
      user.createdAt,
      user.updatedAt,
    );
  }

  async getUserById(id) {
    const user = await prisma.user.findUnique({ where: { id } });
    if (user) {
      return new User(
        user.id,
        user.email,
        user.name,
        user.createdAt,
        user.updatedAt,
      );
    }
    return null;
  }

  async getUserByEmail(email) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      return new User(
        user.id,
        user.name,
        user.phone,
        user.email,
        user.password,
        user.createdAt,
        user.updatedAt,
      );
    }
    return null;
  }

  async getAllUsers() {
    const users = await prisma.user.findMany({ where: { isDelete: false } });
    return users.map(
      (user) =>
        new User(
          user.id,
          user.email,
          user.name,
          user.createdAt,
          user.updatedAt,
        ),
    );
  }

  async updateUser(id, data) {
    const user = await prisma.user.update({
      where: { id },
      data,
    });
    return new User(
      user.id,
      user.email,
      user.name,
      user.createdAt,
      user.updatedAt,
    );
  }
}

module.exports = new UserRepository();
