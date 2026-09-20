const { sendErrorResponse } = require("../utils/response");

const getAllUser = (req, res) => {
  try {
    res.send("Fetching all users.");
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const addUser = (req, res) => {
  try {
    res.send("Adding a new user.");
  } catch (error) {
    sendErrorResponse(res, err);
  }
};

const getUserById = (req, res) => {
  try {
    const uid = req.params.id;

    res.send(`Fetching user with ID:${uid}`);
  } catch (res) {
    sendErrorResponse(res, err);
  }
};

module.exports = { getAllUser, addUser, getUserById };
