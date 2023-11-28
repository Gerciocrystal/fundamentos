const express = require("express");
const OrderRoutes = require("./order");
const restourantRouter = require("./restaurant");
const userRouter = require("./user");
const Routes = express.Router();

Routes.use("/auth", userRouter);
Routes.use("/restourant", restourantRouter);
Routes.use("/order", OrderRoutes);
Routes.all("/*", (req, res) => {
  res.status(404).send("Page not founded");
});

module.exports = Routes;
