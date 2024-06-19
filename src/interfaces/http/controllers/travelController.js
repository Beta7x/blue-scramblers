const travelService = require("../../../application/services/travelService");
const APIResponse = require("../../dtos/apiResponse");

class TravelController {
  async createTravel(request, h) {
    try {
      const { name, price, imageUrl, description, location } = request.payload;
      const travel = await travelService.createTravel({
        name,
        price,
        imageUrl,
        description,
        location,
      });

      return h
        .response(APIResponse.success("Success create travel", travel))
        .code(201);
    } catch (error) {
      console.error(error);
      return h
        .response(APIResponse.error("Error when create travel", error))
        .code(500);
    }
  }

  async getTravelById(request, h) {
    const { id } = request.params.id;
    try {
      const travel = await travelService.getTravelById(id);
      return h
        .response(APIResponse.success("Success get travel", travel))
        .code(200);
    } catch (error) {
      console.error(error);
      return h
        .response(APIResponse.error("Failed to get travel", error))
        .code(500);
    }
  }

  async updateTravel(request, h) {
    const { name, price, imageUrl, description, location } = request.payload;
    const { id } = request.params.id;

    try {
      const travel = await travelService.updateTravel(id, {
        name,
        price,
        imageUrl,
        description,
        location,
      });

      return h
        .response(APIResponse.success("Success update travel", travel))
        .code(200);
    } catch (error) {
      console.error(error);
      return h
        .response(APIResponse.error("Failed to update travel", error))
        .code(500);
    }
  }

  async getAllTravel(_request, h) {
    console.log("GET ALL TRAVEL");
    try {
      const travels = await travelService.getAllTravel();
      return h
        .response(APIResponse.success("Success get all travels", travels))
        .code(200);
    } catch (error) {
      console.error(error);
      return h
        .response(APIResponse.error("Failed to retrieve all travels", error))
        .code(500);
    }
  }

  async deleteTravel(request, h) {
    const { id } = request.params.id;
    try {
      const isDelete = await travelService.deleteTravel(id);
      if (isDelete) {
        return h
          .response(APIResponse.success("Success delete travel"))
          .code(200);
      }
      return h.response(APIResponse.error("Cannot get travel")).code(404);
    } catch (error) {
      console.error(error);
      return h
        .response(APIResponse.error("Cannot delete travel", error))
        .code(500);
    }
  }
}

module.exports = new TravelController();
