const getAllProducts = (req, res) => {
  res.send("Fetching all products");
};

const addProducts = (req, res) => {
  res.send("Adding a new product.");
};

const getProductById = (req, res) => {
  const pid = req.params.id;

  res.send(`Fetching product with ID:${pid}`);
};

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
