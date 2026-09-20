const db = require("../utils/db-connection");

const addBus = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;

  const query = `
    INSERT INTO Buses
    (busNumber, totalSeats, availableSeats)
    VALUES (?, ?, ?)
  `;

  db.execute(query, [busNumber, totalSeats, availableSeats], (err, result) => {
    if (err) {
      console.log("Error adding bus:", err);

      return res.status(500).json({
        message: "Failed to add bus",
      });
    }

    console.log("Bus added:", result.insertId);

    res.status(201).json({
      message: "Bus added successfully",
      id: result.insertId,
      busNumber,
      totalSeats,
      availableSeats,
    });
  });
};

const getAvailableBuses = (req, res) => {
  const { seats } = req.params;

  const query = `
    SELECT *
    FROM Buses
    WHERE availableSeats > ?
  `;

  db.execute(query, [seats], (err, result) => {
    if (err) {
      console.log("Error fetching buses:", err);

      return res.status(500).json({
        message: "Failed to fetch buses",
      });
    }

    res.status(200).json({
      message: "Available buses fetched successfully",
      buses: result,
    });
  });
};

module.exports = {
  addBus,
  getAvailableBuses,
};
