const asyncHandler = require("express-async-handler");
const Order = require("../model/orderModel");
const Restourant = require("../model/restourantModel");
const Cart = require("../model/cartModel");
exports.createOrder = asyncHandler(async (req, res) => {
  try {
    const {
      cart,
      restourantId,
      location,
      distance,
      total,
      ownerPhone,
      ownerName,
    } = req.body;

    if (
      !cart ||
      !restourantId ||
      !location ||
      !distance ||
      !total ||
      !ownerPhone ||
      !ownerName
    )
      throw new Error("Preencha todos os campos");

    const cartId = new Array();
    for (const c of cart) {
      // nunca usar map para funcoes async
      const temp = await Cart.create({
        name: c.name,
        price: c.price,
        quantity: c.quantity,
      });

      cartId.push(temp._id);
    }

    let order = await Order.create({
      restourantId: restourantId,
      location: location,
      distance,
      cart: cartId,
      total,
      ownerPhone,
    });

    order = await order.populate("cart");

    if (!order) throw new Error("Erro no servidor");

    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});

exports.getOrder = asyncHandler(async (req, res) => {
  try {
    const order = await Order.find().populate("cart");
    if (!order) throw new Error("Não existem pedidos");

    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});
exports.getFrequentMenus = asyncHandler(async (req, res) => {
  try {
    let cart = await Order.aggregate([
      { $group: { _id: "$restourantId", value: { $sum: 1 } } },
    ]);

    let restourants = new Array();
    //o promisse para poder melhorar a flexibilidade da App
    const promise = cart.map(async (ass) => {
      let temp = await Restourant.findById(ass._id);
      restourants.push({ nome: temp.name, count: ass.value });
    });

    Promise.all(promise)
      .then(() => {
        res.json(restourants);
      })
      .catch((err) => {
        console.error("Erro ao obter assuntos mais recorrentes:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
      });
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});
exports.getFrequentStatus = asyncHandler(async (req, res) => {
  try {
    const status = await Order.aggregate([
      {
        $group: { _id: "$status", value: { $sum: 1 } },
      },
    ]);
    if (!status)
      throw new Error("Não existem Resultados salvos na base de dados");

    res.json(status);
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});
