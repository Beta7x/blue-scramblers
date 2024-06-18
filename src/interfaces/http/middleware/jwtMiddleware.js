require("dotenv").config();
const jwt = require("jsonwebtoken");
const APIResponse = require("../../dtos/apiResponse");

const verifyToken = (req, h, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return h.response(APIResponse.error("Unauhtorized")).code(401).takeover();

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;

    return next();
  } catch (error) {
    return h
      .response(APIResponse.error("Unauhtorized :", error))
      .code(401)
      .takeover();
  }
};

module.exports = { verifyToken };
