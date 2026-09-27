const { Sequelize } = require("sequelize");

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

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "vishu",
//   database: "student_management",
// });

// connection.connect((err) => {
//   if (err) {
//     console.log("Database connection failed:", err);
//     return;
//   }

//   console.log("Database connected successfully");
// });

// module.exports = connection;
