const asyncHandler = require("express-async-handler");
const Menu = require("../model/menuModel");
const Position = require("../model/positionModel");
const Restourant = require("../model/restourantModel");

exports.createRestourant = asyncHandler(async (req, res) => {
  try {
    const { name, location, position } = req.body;

    if (!name || !location || !position)
      throw new Error("Preencha todos os campos");

    const newPosition = await Position.create({
      latitude: position.latitude,
      longitude: position.longitude,
    });

    if (!newPosition) throw new Error("Posições Invalidas");

    let newRestaurant = await Restourant.create({
      name,
      location,
      restourantId: Math.floor(Math.random() * 90000) + 10000,
      position: newPosition._id,
    });
    if (!newRestaurant) {
      await Position.findByIdAndDelete(newPosition._id);
      throw new Error("Erro do servidor");
    }
    newRestaurant = await newRestaurant.populate("position");

    res.json(newRestaurant);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

exports.getRestourants = asyncHandler(async (req, res) => {
  try {
    // const seila = await Restourant.updateMany(
    //   {},
    //   { $set: { restourantId: Math.floor(Math.random() * 90000) + 10000 } },
    //   { new: true }
    // );
    let restourants = await Restourant.find().populate("menu");

    restourants = await Restourant.populate(restourants, {
      path: "position",
      select: "longitude latitude",
    });

    if (!restourants) throw new Error("Sem registros");
    res.json(restourants);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});
exports.getRestourant = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    let restourant = await Restourant.findById(id).populate("menu");

    restourant = await Restourant.populate(restourant, {
      path: "position",
      select: "longitude latitude",
    });

    if (!restourant) throw new Error("Não existe");

    res.json(restourant);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});
exports.addMenu = asyncHandler(async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const id = req.params.id;

    if (!name || !description || !price)
      throw new Error("Preencha todos os campos");

    const menu = await Menu.create({
      name: name,
      description: description,
      price: price,
    });

    if (!menu) throw new Error("Falha no processo de criação do menu");
    let restourant = await Restourant.findByIdAndUpdate(
      id,
      {
        $push: { menu: menu._id },
      },
      { new: true }
    ).populate("menu");

    if (!restourant) throw new Error("Erro no servidor");

    res.json(restourant);
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});
