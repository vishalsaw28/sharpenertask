const productServices = require("../services/productServices");

const getAllProducts = productServices.gettigAllProduct;

const addProducts = productServices.addingNewProduct;

const getProductById = productServices.gettingSingleProductById;

// const putProducts = (req, res) => {
//   res.send("Put request called.");
// };

// const deleteproducts = (req, res) => {
//   res.send("Delete request called.");
// };

module.exports = {
  getAllProducts,
  addProducts,
  getProductById,
  //   putProducts,
  //   deleteproducts,
};
