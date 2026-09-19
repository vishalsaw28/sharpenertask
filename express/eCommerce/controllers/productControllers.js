const path = require("path");

const productServices = require("../services/productServices");

const getForm = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "form.html"));
};

const getProducts = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "product.html"));
};
// const getAllProducts = productServices.gettigAllProduct;

const addProducts = productServices.addingNewProduct;

const getProductById = productServices.gettingSingleProductById;

// const putProducts = (req, res) => {
//   res.send("Put request called.");
// };

// const deleteproducts = (req, res) => {
//   res.send("Delete request called.");
// };

module.exports = {
  // getAllProducts,
  getProducts,
  addProducts,
  getForm,
  getProductById,
  //   putProducts,
  //   deleteproducts,
};
