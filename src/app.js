const express = require("express");
const bodyParser = require("body-parser");

// Load environment variables from .env file, where API keys and passwords are configured
require("dotenv").config();

// Create Express server
const app = express();

// Express configuration
app.use(bodyParser.json());

// Routes
const order = require("./routes/order");
app.use("/api/ordercreated", order);

// default route
app.get("/", async (req, res, next) => {
  try {
    res.json("server is running");
  } catch (error) {
    next(error);
  }
});

module.exports = app;
