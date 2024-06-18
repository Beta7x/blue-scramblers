const APIResponse = require("../../dtos/apiResponse");
const userService = require("../../../application/services/userService");
const { generateToken } = require("../../../utils/jwtUtils");
const bcrypt = require("bcrypt");

class AuthController {
  async login(request, h) {
    try {
      const { email, password } = request.payload;
      const user = await userService.getUserByEmail(email);
      console.log(`Request: ${password}, Response: ${user.password}`);
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!user || !isValidPassword) {
        return h
          .response(
            APIResponse.error("Unauthorized", "invalid email or password"),
          )
          .code(400);
      }
      const { id, email: userEmail, role } = user;
      const token = generateToken({ id, userEmail, role });

      return h
        .response(APIResponse.success("Success", token))
        .state("cookie", token)
        .code(200);
    } catch (error) {
      console.debug("Error: ", error);
      return h.response(APIResponse.error("Failed to authenticate"));
    }
  }
}

module.exports = new AuthController();
