class TestController {
  async hello(request, h) {
    try {
      return h.response({ message: "Hello world" }).code(200);
    } catch (error) {
      return h.response({ message: "Failed", error: error }).code(500);
    }
  }
}

module.exports = new TestController();
