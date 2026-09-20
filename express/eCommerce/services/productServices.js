const gettigAllProduct = (req, res) => {
  res.send("Fetching all Products.");
};

const gettingSingleProductById = (req, res) => {
  const pid = req.params.id;

  res.send(`Fetching product with ID:${pid}`);
};

const addingNewProduct = (req, res) => {
  // res.send("Adding a new Product.");

  const data = req.body;

  res.json({ value: data.productName });
};

module.exports = {
  gettigAllProduct,
  gettingSingleProductById,
  addingNewProduct,
};
