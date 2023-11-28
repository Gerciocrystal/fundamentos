const mongoose = require("mongoose");

const restourantModel = mongoose.Schema({
  restourantId: { type: Number, unique: true },
  name: { type: String, require: true },
  location: { type: String, require: true },
  position: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "position",
    require: true,
  },
  menu: [{ type: mongoose.Schema.Types.ObjectId, ref: "menu" }],
});

const Restourant = mongoose.model("restourant", restourantModel);

module.exports = Restourant;
