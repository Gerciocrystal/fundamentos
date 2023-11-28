const asyncHandler = require("express-async-handler");
const { c2b } = require("../config/c2b");

exports.payOrder = asyncHandler(async (req, res, next) => {
  try {
    const { ownerPhone, total } = req.body;

    const cbSucess = (resp) => {
      next();
    };
    const cbBug = (error) => {
      return res.status(500).send({
        message: "Falha na operação",
      });
      //   throw new Error("Falha no pagamento");
    };

    c2b({ amount: String(total), number: ownerPhone }, cbSucess, cbBug);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});
