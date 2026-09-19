const getAllUser = (req, res) => {
  res.send("Fetching all users.");
};

const addUser = (req, res) => {
  res.send("Adding a new user.");
};

const getUserById = (req, res) => {
  const uid = req.params.id;

  res.send(`Fetching user with ID:${uid}`);
};

module.exports = { getAllUser, addUser, getUserById };
