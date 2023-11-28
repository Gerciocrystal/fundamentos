const express = require("express");
const { createUser, login } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.route("/sign").post(createUser);
userRouter.route("/login").post(login);

module.exports = userRouter;
