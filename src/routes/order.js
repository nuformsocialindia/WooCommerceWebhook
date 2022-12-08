const express = require("express");
const router = express.Router();
const {  sendReport } = require("../services/telegram");
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
      date_created,
      address_1,
      address_2,
      city,
      state,
      postcode,
      billing,
      shipping,
      payment_method,
      spayment_method_title,
      line_items,
    } = req.body;

    items = line_items.map((item) => {});
    const report = "New Order "+date_created +"\n"+billing["first_name"] +" " + billing["last_name"] +"\n"+billing["address_1"] +"\n"+ billing["address_2"] ;

    // send message to telegram
    sendReport(report.toString());

    console.log(billing);

    res.json(billing);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
