const db = require("../utils/db-connection");

const addUser = (req, res) => {
  const { name, email } = req.body;

  const query = `
    INSERT INTO Users (name, email)
    VALUES (?, ?)
  `;

  db.execute(query, [name, email], (err, result) => {
    if (err) {
      console.log("Error adding user:", err);

      return res.status(500).json({
        message: "Failed to add user",
      });
    }

    console.log("User added:", result.insertId);

    res.status(201).json({
      message: "User added successfully",
      id: result.insertId,
      name,
      email,
    });
  });
};

const getUsers = (req, res) => {
  const query = `SELECT * FROM Users`;

  db.execute(query, (err, result) => {
    if (err) {
      console.log("Error fetching users:", err);

      return res.status(500).json({
        message: "Failed to fetch users",
      });
    }

    res.status(200).json({
      message: "Users fetched successfully",
      users: result,
    });
  });
};

module.exports = {
  addUser,
  getUsers,
};
