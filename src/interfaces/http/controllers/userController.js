const userService = require("../../../application/services/userService");
const APIResponse = require("../../dtos/apiResponse");

class UserController {
  async createUser(request, h) {
    try {
      const { email, name, password, phone } = request.payload;
      const user = await userService.createUser({
        name,
        email,
        phone,
        password,
      });
      return h
        .response(APIResponse.success("Success create users", user))
        .code(201);
    } catch (error) {
      console.debug(error);
      return h
        .response(APIResponse.error("Failed create users", error))
        .code(500);
    }
  }

  async getUserById(request, h) {
    const { email } = request.payload;
  }
}

module.exports = new UserController();
