const Student = require("./students");
const IdentityCard = require("./identityCard");
const department = require("./department");
const courses = require("./courses");
const studentCourses = require("./studentCourses");

// One-to-One Association
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

// One to many

department.hasMany(Student);
Student.belongsTo(department);

// Many to many associations

Student.belongsToMany(courses, { through: studentCourses });
courses.belongsToMany(Student, { through: studentCourses });

module.exports = {
  Student,
  IdentityCard,
  department,
  courses,
  studentCourses,
};
