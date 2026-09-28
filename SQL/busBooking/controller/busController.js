const db = require("../utils/db-connection");
const Bus = require("../models/Buses");
const { Op } = require("sequelize");

const addBus = async (req, res) => {
  try {
    const bus1 = await Bus.create({
      name: "Volvo",
      category: "AC",
      availableSeats: 25,
    });

    const bus2 = await Bus.create({
      name: "Merceedis",
      category: "nonAC",
      availableSeats: 9,
    });

    return res.status(201).json({
      message: "2 Bus added.",
      buses: [bus1, bus2],
    });
  } catch (error) {
    res.status(500).json({
      message: "Error inserting buses.",
      error: error.message,
    });
  }
};

const getBus = async (req, res) => {
  try {
    const seats = req.params.seats;

    const buses = await Bus.findAll({
      where: {
        availableSeats: {
          [Op.gt]: seats,
        },
      },
    });

    res.status(200).json(buses);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error gettingg the bus.", error: error.message });
  }
};

// const { busNumber, totalSeats, availableSeats } = req.body;

// const query = `
//   INSERT INTO Buses
//   (busNumber, totalSeats, availableSeats)
//   VALUES (?, ?, ?)
// `;

// db.execute(query, [busNumber, totalSeats, availableSeats], (err, result) => {
//   if (err) {
//     console.log("Error adding bus:", err);

//     return res.status(500).json({
//       message: "Failed to add bus",
//     });
//   }

//   console.log("Bus added:", result.insertId);

//   res.status(201).json({
//     message: "Bus added successfully",
//     id: result.insertId,
//     busNumber,
//     totalSeats,
//     availableSeats,
//   });
// });

// const getAvailableBuses = (req, res) => {
//   const { seats } = req.params;

//   const query = `
//     SELECT *
//     FROM Buses
//     WHERE availableSeats > ?
//   `;

//   db.execute(query, [seats], (err, result) => {
//     if (err) {
//       console.log("Error fetching buses:", err);

//       return res.status(500).json({
//         message: "Failed to fetch buses",
//       });
//     }

//     res.status(200).json({
//       message: "Available buses fetched successfully",
//       buses: result,
//     });
//   });
// };

module.exports = {
  addBus,
  getBus,
};
