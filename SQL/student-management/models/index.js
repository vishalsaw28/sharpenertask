const Student = require("./students");
const IdentityCard = require("./identityCard");

// One-to-One Association
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

module.exports = {
  Student,
  IdentityCard,
};
