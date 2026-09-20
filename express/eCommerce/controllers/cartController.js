const sendErrorResponse = require("../utils/response");

const getCartForUser = (req, res) => {
  try {
    const userId = req.params.userId;
    res.send(`Fetching cart for user with ID:${userId}`);
  } catch (error) {
    sendErrorResponse(res, err);
  }
};

const addProductToCart = (req, res) => {
  try {
    const userId = req.params.userId;
    res.send(`Adding product to cart for user with ID:${userId}`);
  } catch (error) {
    sendErrorResponse(res, err);
  }
};

module.exports = { getCartForUser, addProductToCart };
