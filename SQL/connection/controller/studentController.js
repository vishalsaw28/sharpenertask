const db = require("../utils/db-connection");

const addEntries = (req, res) => {
  const { name, email } = req.body;

  const query = `
    INSERT INTO users (name, email)
    VALUES (?, ?)
  `;

  db.execute(query, [name, email], (err, result) => {
    if (err) {
      console.log("Error inserting user:", err);

      return res.status(500).json({
        message: "Failed to add user",
      });
    }

    console.log("User inserted:", result.insertId);

    res.status(201).json({
      message: "User added successfully",
      id: result.insertId,
      name,
      email,
    });
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const query = `
    UPDATE users
    SET name = ?, email = ?
    WHERE id = ?
  `;

  db.execute(query, [name, email, id], (err, result) => {
    if (err) {
      console.log("Error updating user:", err);

      return res.status(500).json({
        message: "Failed to update user",
      });
    }

    // User does not exist
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    console.log("User updated:", id);

    res.status(200).json({
      message: "User updated successfully",
      id,
      name,
      email,
    });
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  const query = `
    DELETE FROM users
    WHERE id = ?
  `;

  db.execute(query, [id], (err, result) => {
    if (err) {
      console.log("Error deleting user:", err);

      return res.status(500).json({
        message: "Failed to delete user",
      });
    }

    // User does not exist
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    console.log("User deleted:", id);

    res.status(200).json({
      message: "User deleted successfully",
      id,
    });
  });
};

module.exports = {
  addEntries,
  updateUser,
  deleteUser,
};
