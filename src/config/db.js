const mongoose = require("mongoose");
require("dotenv").config();

module.exports = {
  connectToDb: mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(`Failed to connect ${err}`);
    }),
};
