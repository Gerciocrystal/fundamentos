const mongoose = require("mongoose");

const orderModel = mongoose.Schema({
  restourantId: { type: mongoose.Schema.Types.ObjectId, ref: "restourant" },
  ownerPhone: { type: String, require: true },
  location: { type: String, require: true },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "cart" }],
  distance: { type: Number, require: true },
  total: { type: Number, require: true },
  status: { type: String, default: "PENDENTE" },
});

const Order = mongoose.model("order", orderModel);

module.exports = Order;
