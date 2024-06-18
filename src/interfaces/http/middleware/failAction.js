const APIResponse = require("../../dtos/apiResponse");

const failAction = (request, h, err) => {
  if (err.isBoom) {
    const errors = {};
    err.details.forEach((detail) => {
      const field = detail.context.key;
      const message = detail.message;

      if (errors[field]) {
        if (Array.isArray(errors[field])) {
          errors[field].push(message);
        } else {
          errors[field] = [errors[field], message];
        }
      } else {
        errors[field] = message;
      }
    });

    return h
      .response(APIResponse.error("Failed to validate", errors))
      .code(400)
      .takeover();
  }

  return h
    .response(APIResponse.error("Internal Server Error", err))
    .code(500)
    .takeover();
};

module.exports = failAction;
