const mongoose = require("mongoose");

const cartModel = mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
  quantity: { type: Number, require: true },
});

const Cart = mongoose.model("cart", cartModel);

module.exports = Cart;
