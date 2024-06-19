const { createArticleSchema } = require("../../../api/schemas/articleSchemas");
const APIResponse = require("../../dtos/apiResponse");

const validatePayload = async (request, h) => {
  try {
    await createArticleSchema.validateAsync(request.payload, {
      abortEarly: false,
    });

    return h.continue;
  } catch (error) {
    const errors = {};
    error.details.forEach((detail) => {
      const field = detail.context.key;
      if (!errors[field]) {
        errors[field] = [];
      }
      errors[field].push(detail.message);
    });

    return h
      .response(APIResponse.error("Failed to validate", errors))
      .code(400);
  }
};

module.exports = validatePayload;
