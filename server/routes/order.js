const express = require("express");
const {
  getOrder,
  createOrder,
  getFrequentMenus,
  getFrequentStatus,
} = require("../controllers/Order");
const { protect } = require("../middleware/authMiddleware");
const { payOrder } = require("../middleware/payment");
const OrderRoutes = express.Router();

OrderRoutes.route("/").get(getOrder).post(payOrder, createOrder);
OrderRoutes.route("/report").get(getFrequentMenus);
OrderRoutes.route("/report/status").get(getFrequentStatus);

module.exports = OrderRoutes;
