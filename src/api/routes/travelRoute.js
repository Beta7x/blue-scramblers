const travelController = require("../../interfaces/http/controllers/travelController");
const path = "/api/travels";

module.exports = [
  {
    method: "POST",
    path,
    handler: travelController.createTravel.bind(travelController),
  },
  {
    method: "PUT",
    path: `${path}/{id}`,
    handler: travelController.updateTravel,
  },
  {
    method: "GET",
    path,
    handler: travelController.getAllTravel,
  },
  {
    method: "GET",
    path: `${path}/{id}`,
    handler: travelController.getTravelById,
  },
  {
    method: "DELETE",
    path: `${path}/{id}`,
    handler: travelController.deleteTravel,
  },
];
