const mongoose = require("mongoose");

const positionModel = mongoose.Schema({
  longitude: { type: String, require: true },
  latitude: { type: String, require: true },
});

const Position = mongoose.model("position", positionModel);

module.exports = Position;
