const UserService = require("./userService");

class AuthService extends UserService {
  async login(data) {
    const { email } = data;
    const user = await super.getUserByEmail(email);
  }
}

module.exports = new AuthService();
