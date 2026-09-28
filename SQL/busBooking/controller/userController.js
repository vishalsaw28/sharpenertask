const db = require("../utils/db-connection");
const User = require("../models/Users");

const addUser = async (req, res) => {
  try {
    const user1 = await User.create({
      name: "vishal",
      email: "vishalsaw2808@gmail.com",
    });
    const user2 = await User.create({
      name: "rahul",
      email: "rahulsaw2808@gmail.com",
    });
    const user3 = await User.create({
      name: "rohit",
      email: "rohitsaw2808@gmail.com",
    });

    return res.status(201).json({
      message: "3 users added successfully.",
      users: [user1, user2, user3],
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error inserting users.",
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      message: "Error getting users",
      error: error.message,
    });
  }
};

// const addUser = (req, res) => {
//   const { name, email } = req.body;

//   const query = `
//     INSERT INTO Users (name, email)
//     VALUES (?, ?)
//   `;

//   db.execute(query, [name, email], (err, result) => {
//     if (err) {
//       console.log("Error adding user:", err);

//       return res.status(500).json({
//         message: "Failed to add user",
//       });
//     }

//     console.log("User added:", result.insertId);

//     res.status(201).json({
//       message: "User added successfully",
//       id: result.insertId,
//       name,
//       email,
//     });
//   });
// };

// const getUsers = (req, res) => {
//   const query = `SELECT * FROM Users`;

//   db.execute(query, (err, result) => {
//     if (err) {
//       console.log("Error fetching users:", err);

//       return res.status(500).json({
//         message: "Failed to fetch users",
//       });
//     }

//     res.status(200).json({
//       message: "Users fetched successfully",
//       users: result,
//     });
//   });
// };

module.exports = {
  addUser,
  getUser,
};
