const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");

const app = express();
const port = 8000;

const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connecting to database.
mongoose
  .connect("mongodb://localhost:27017/password-manager-app")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

app.listen(port, () => {
  console.log("Server is running on port", port);
});
