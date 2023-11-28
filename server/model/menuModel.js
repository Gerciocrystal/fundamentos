const mongoose = require("mongoose");

const menuModel = mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
});

const Menu = mongoose.model("menu", menuModel);

module.exports = Menu;
