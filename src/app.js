const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());

const order = require("./routes/order");
app.use("/api/ordercreated", order);

app.get("/", async (req, res, next) => {
  try {
    res.json("server is running");
  } catch (error) {
    next(error);
  }
});

module.exports = app;
