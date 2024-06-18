const Joi = require("joi");

const createUserSchema = Joi.object({
  name: Joi.string().min(3).max(100).required().messages({
    "string.empty": "name is required",
    "string.max": "name should be less than 100 charaters",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "email is required",
    "string.email": "email must be a valid email address",
  }),
  phone: Joi.string().max(15).messages({
    "string.empty": "phone is required",
  }),
  password: Joi.string().min(8).max(50).required().messages({
    "string.empty": "password is required",
    "string.min": "password should be equal or greater than 8 characters",
  }),
});

const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(100),
  password: Joi.string().min(8).max(50),
});

module.exports = { createUserSchema, updateUserSchema };
