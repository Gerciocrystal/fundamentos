const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const User = require("../model/userModel");
exports.createUser = asyncHandler(async (req, res) => {
  try {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
      throw new Error("Prencha todos os campos");
    }
    const existuser = await User.findOne({ username: username });

    if (existuser) throw new Error("o Utilizador ja esta registrado");

    const user = await User.create({
      name: name,
      username: username,
      password: password,
    });

    if (!user) throw new Error("Erro do servidor");

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});
exports.login = asyncHandler(async (req, res) => {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))) {
      res.cookie("token", generateToken(user._id), { httpOnly: true }).json({
        _id: user._id,
        name: user.name,
        username: user.username,
      });
    } else {
      console.error(error.message);
      res.status(400);
      res.send(error.message);
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});
