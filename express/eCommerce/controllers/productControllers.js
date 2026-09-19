const getProducts = (req, res) => {
  res.send("Fetching all products");
};

const postProducts = (req, res) => {
  res.send("Adding a new product.");
};

const fetchId = (req, res) => {
  const pid = req.params.id;

  res.send(`Fetching product with ID:${pid}`);
};

const putProducts = (req, res) => {
  res.send("Put request called.");
};

const deleteproducts = (req, res) => {
  res.send("Delete request called.");
};

module.exports = {
  getProducts,
  postProducts,
  fetchId,
  putProducts,
  deleteproducts,
};
