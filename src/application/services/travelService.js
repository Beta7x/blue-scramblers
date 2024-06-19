const travelRepository = require("../../infrastructure/database/travelRepository");

class TravelService {
  async createTravel(data) {
    return await travelRepository.createTravel(data);
  }

  async getAllTravel() {
    return await travelRepository.getAllTravel();
  }

  async getTravelById(id) {
    return await travelRepository.getTravelById(id);
  }

  async updateTravel(id, data) {
    return await travelRepository.updateTravel(id, data);
  }

  async deleteTravel(id) {
    return await travelRepository.deleteTravel(id);
  }
}

module.exports = new TravelService();
