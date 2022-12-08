const express = require("express");
const router = express.Router();
const { sendMessage } = require("../services/telegram");
// default route
router.get("/", async (req, res, next) => {
  try {
    res.json("order server is running");
  } catch (error) {
    next(error);
  }
});

// post route
router.post("/", async (req, res, next) => {
  try {
    const {
      billing,
      shipping,
      payment_method,
      spayment_method_title,
      line_items,
    } = req.body;
    sendMessage(1072071089, billing["first_name"].toString());

    console.log(billing);

    res.json(billing);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
