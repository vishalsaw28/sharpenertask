const db = require("../utils/db-connection");

const addStudent = (req, res) => {
  const { name, email, age } = req.body;

  const query = `
    INSERT INTO students (name, email, age)
    VALUES (?, ?, ?)
  `;

  db.execute(query, [name, email, age], (err, result) => {
    if (err) {
      console.log("Error inserting student:", err);

      return res.status(500).json({
        message: "Failed to add student",
      });
    }

    console.log("INSERT operation - Student ID:", result.insertId);

    res.status(201).json({
      message: "Student added successfully",
      student: {
        id: result.insertId,
        name,
        email,
        age,
      },
    });
  });
};

const getAllStudents = (req, res) => {
  const query = `
    SELECT *
    FROM students
  `;

  db.execute(query, (err, result) => {
    if (err) {
      console.log("Error fetching students:", err);

      return res.status(500).json({
        message: "Failed to fetch students",
      });
    }

    res.status(200).json({
      message: "Students fetched successfully",
      students: result,
    });
  });
};

const getStudentById = (req, res) => {
  const { id } = req.params;

  const query = `
    SELECT *
    FROM students
    WHERE id = ?
  `;

  db.execute(query, [id], (err, result) => {
    if (err) {
      console.log("Error fetching student:", err);

      return res.status(500).json({
        message: "Failed to fetch student",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Student fetched successfully",
      student: result[0],
    });
  });
};

const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const query = `
    UPDATE students
    SET name = ?, email = ?, age = ?
    WHERE id = ?
  `;

  db.execute(query, [name, email, age, id], (err, result) => {
    if (err) {
      console.log("Error updating student:", err);

      return res.status(500).json({
        message: "Failed to update student",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    console.log("UPDATE operation - Student ID:", id);

    res.status(200).json({
      message: "Student updated successfully",
      student: {
        id,
        name,
        email,
        age,
      },
    });
  });
};

const deleteStudent = (req, res) => {
  const { id } = req.params;

  const query = `
    DELETE FROM students
    WHERE id = ?
  `;

  db.execute(query, [id], (err, result) => {
    if (err) {
      console.log("Error deleting student:", err);

      return res.status(500).json({
        message: "Failed to delete student",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    console.log("DELETE operation - Student ID:", id);

    res.status(200).json({
      message: "Student deleted successfully",
      id,
    });
  });
};

module.exports = {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
