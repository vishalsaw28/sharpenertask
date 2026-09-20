const Students = require("../models/students");

const addStudent = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const student = await Students.create({
      name,
      email,
      age,
    });

    console.log("Student inserted:", student.id);

    res.status(201).json({
      message: "Student added successfully",
      student,
    });
  } catch (error) {
    console.log("Error inserting student:", error);

    res.status(500).json({
      message: "Failed to add student",
      error: error.message,
    });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Students.findAll();

    res.status(200).json({
      message: "Students fetched successfully",
      students,
    });
  } catch (error) {
    console.log("Error fetching students:", error);

    res.status(500).json({
      message: "Failed to fetch students",
      error: error.message,
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Students.findByPk(id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Student fetched successfully",
      student,
    });
  } catch (error) {
    console.log("Error fetching student:", error);

    res.status(500).json({
      message: "Failed to fetch student",
      error: error.message,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email, age } = req.body;

    const student = await Students.findByPk(id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    await student.update({
      name,
      email,
      age,
    });

    console.log("Student updated:", id);

    res.status(200).json({
      message: "Student updated successfully",
      student,
    });
  } catch (error) {
    console.log("Error updating student:", error);

    res.status(500).json({
      message: "Failed to update student",
      error: error.message,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Students.findByPk(id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    await student.destroy();

    console.log("Student deleted:", id);

    res.status(200).json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    console.log("Error deleting student:", error);

    res.status(500).json({
      message: "Failed to delete student",
      error: error.message,
    });
  }
};

module.exports = {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};

// const db = require("../utils/db-connection");

// const addEntries = (req, res) => {
//   const { name, email } = req.body;

//   const query = `
//     INSERT INTO users (name, email)
//     VALUES (?, ?)
//   `;

//   db.execute(query, [name, email], (err, result) => {
//     if (err) {
//       console.log("Error inserting user:", err);

//       return res.status(500).json({
//         message: "Failed to add user",
//       });
//     }

//     console.log("User inserted:", result.insertId);

//     res.status(201).json({
//       message: "User added successfully",
//       id: result.insertId,
//       name,
//       email,
//     });
//   });
// };

// const updateUser = (req, res) => {
//   const { id } = req.params;
//   const { name, email } = req.body;

//   const query = `
//     UPDATE users
//     SET name = ?, email = ?
//     WHERE id = ?
//   `;

//   db.execute(query, [name, email, id], (err, result) => {
//     if (err) {
//       console.log("Error updating user:", err);

//       return res.status(500).json({
//         message: "Failed to update user",
//       });
//     }

//     // User does not exist
//     if (result.affectedRows === 0) {
//       return res.status(404).json({
//         message: "User not found",
//       });
//     }

//     console.log("User updated:", id);

//     res.status(200).json({
//       message: "User updated successfully",
//       id,
//       name,
//       email,
//     });
//   });
// };

// const deleteUser = (req, res) => {
//   const { id } = req.params;

//   const query = `
//     DELETE FROM users
//     WHERE id = ?
//   `;

//   db.execute(query, [id], (err, result) => {
//     if (err) {
//       console.log("Error deleting user:", err);

//       return res.status(500).json({
//         message: "Failed to delete user",
//       });
//     }

//     // User does not exist
//     if (result.affectedRows === 0) {
//       return res.status(404).json({
//         message: "User not found",
//       });
//     }

//     console.log("User deleted:", id);

//     res.status(200).json({
//       message: "User deleted successfully",
//       id,
//     });
//   });
// };

// module.exports = {
//   addEntries,
//   updateUser,
//   deleteUser,
// };
