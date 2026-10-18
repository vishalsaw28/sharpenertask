const db = require("../utils/db-connection");

const Student = require("../models/students");
const { IdentityCard } = require("../models");

const addEntries = async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = await Student.create({
      email: email,
      name: name,
    });

    res.status(201).send(`User with name:${name} is created `);
  } catch (error) {
    res.status(500).send(`Unable to make an entry.`);
  }
};

const addingValuesToStudentAndIdentityTable = async (req, res) => {
  try {
    const student = await Student.create(req.body.student);
    const idCard = await IdentityCard.create({
      ...req.body.IdentityCard,
      studentId: student.id,
    });
    res.status(201).json({ student, idCard });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).send("User is not found");
    }
    student.name = name;
    await student.save();
    return res.status(200).send("User has been updated");
  } catch (error) {
    return res.status(500).send("user cannot be modified.");
  }
};

const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.destroy({
      where: {
        id: id,
      },
    });
    if (!student) {
      return res.status(404).send("User is not found");
    }

    return res.status(200).send("user is deleted");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error uncountered while deleting the entry");
  }
};

module.exports = {
  addEntries,
  updateEntry,
  deleteEntry,
  addingValuesToStudentAndIdentityTable,
};
