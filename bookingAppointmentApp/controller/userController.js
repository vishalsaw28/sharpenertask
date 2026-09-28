const User = require("../models/Users");

const addUser = async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    const user = await User.create({
      name,
      phone,
      email,
    });

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Unable to create user.");
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Unable to get users.");
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.destroy({
      where: {
        id: id,
      },
    });

    if (!deletedUser) {
      return res.status(404).send("User is not found.");
    }

    res.status(200).send("User deleted successfully.");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error encountered while deleting the user.");
  }
};

module.exports = {
  addUser,
  getUser,
  deleteUser,
};
