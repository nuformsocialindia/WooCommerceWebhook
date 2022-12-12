const express = require("express");
const router = express.Router();
const { sendReport } = require("../services/sendReport");
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
    // send report
    await sendReport(req.body);
    res.json(req.body["billing"]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
