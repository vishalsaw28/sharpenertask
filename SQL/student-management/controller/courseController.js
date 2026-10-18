const { courses, Student } = require("../models");

const addCourse = async (req, res) => {
  try {
    const { name } = req.body;
    const course = await courses.create({ name: name });
    res.json(course);
  } catch (error) {
    res.status(500).josn({ error: error.message });
  }
};

const addStudentsTOCourses = async (req, res) => {
  try {
    const { studentId, courseIds } = req.body;

    const student = await Student.findByPk(studentId);
    const course = await courses.findAll({
      where: {
        id: courseIds,
      },
    });

    await student.addCourse(course);

    const updatedStundet = await student.findByPk(studentId, {
      include: course,
    });
    res.status(200).josn(updatedStundet);
  } catch (error) {}
};

module.exports = {
  addCourse,
  addStudentsTOCourses,
};
