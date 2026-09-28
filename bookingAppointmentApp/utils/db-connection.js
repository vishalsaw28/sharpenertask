const Sequelize = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "tiger", {
  host: "localhost",
  dialect: "mysql",
});
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;
