const express = require("express");
const connectToMongoDB = require("./config/db");
const app = express();

// Connect to MongoDB
connectToMongoDB.connectToDb;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
