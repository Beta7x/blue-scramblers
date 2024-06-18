const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "email is required",
    "string.email": "email must be a valid email address",
  }),
  password: Joi.string().min(8).max(50).required().messages({
    "string.empty": "password is required",
    "string.min": "password should be equal or greater than 8 characters",
  }),
});

module.exports = { loginSchema };
