const userRepository = require("../../infrastructure/database/userRepository");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class UserService {
  async createUser(data) {
    data.password = bcrypt.hashSync(data.password, saltRounds);
    return await userRepository.createUser(data);
  }

  async getUserById(id) {
    return await userRepository.getUserByEmail(id);
  }

  async getUserByEmail(email) {
    return await userRepository.getUserByEmail(email);
  }

  async updateUser(id, data) {
    return await userRepository.updateUser(id, data);
  }
}

module.exports = new UserService();
