const sendErrorResponse = require("../utils/response");

const gettigAllProduct = (req, res) => {
  try {
    res.send("Fetching all Products.");
  } catch (error) {
    sendErrorResponse(res, err);
  }
};

const gettingSingleProductById = (req, res) => {
  try {
    const pid = req.params.id;

    res.send(`Fetching product with ID:${pid}`);
  } catch (error) {
    sendErrorResponse(res, err);
  }
};

const addingNewProduct = (req, res) => {
  try {
    // res.send("Adding a new Product.");

    const data = req.body;

    res.json({ value: data.productName });
  } catch (error) {
    sendErrorResponse(res, err);
  }
};

module.exports = {
  gettigAllProduct,
  gettingSingleProductById,
  addingNewProduct,
};
