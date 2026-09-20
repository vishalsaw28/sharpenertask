const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
});

(async () => {
  try {
    await sequelize.authenticate();

    console.log("Connection to the Database has been created");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
