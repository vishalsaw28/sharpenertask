const Student = require("./students");
const IdentityCard = require("./identityCard");
const department = require("./department");

// One-to-One Association
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

// One to many

department.hasMany(Student);
Student.belongsTo(department);

module.exports = {
  Student,
  IdentityCard,
  department,
};
