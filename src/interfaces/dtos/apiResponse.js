class APIResponse {
  constructor(message, data, error) {
    this.message = message;
    this.data = data;
    this.error = error;
  }

  static success(message = "Operation successful", data) {
    return new APIResponse(message, data);
  }

  static error(message, error) {
    return new APIResponse(message, error);
  }
}

module.exports = APIResponse;
