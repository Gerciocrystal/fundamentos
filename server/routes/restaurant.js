const express = require("express");
const {
  getRestourants,
  getRestourant,
  createRestourant,
  addMenu,
} = require("../controllers/Restourant");
const { protect } = require("../middleware/authMiddleware");
const restourantRouter = express.Router();

restourantRouter.route("/").get(getRestourants).post(createRestourant);
restourantRouter.route("/:id").get(getRestourant).put(addMenu);

module.exports = restourantRouter;
