const Joi = require("joi");

const createArticleSchema = Joi.object({
  title: Joi.string().max(100).required().messages({
    "string.empty": "title is required",
    "string.max": "title should be less than 100 characters",
  }),
  description: Joi.string().required().messages({
    "string.empty": "description is required",
  }),
  image: Joi.any().required().messages({
    "any.empty": "image is required",
  }),
  author: Joi.string().max(100).required().messages({
    "string.empty": "author is required",
    "string.max": "author should be less than 100 characters",
  }),
});

module.exports = { createArticleSchema };
