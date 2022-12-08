const express = require("express");
const router = express.Router();

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
    const { billing, job } = req.body;

    // const map = new Map(Object.entries(JSON.parse(req.body)));
    // map = new Map(JSON.parse(billing));
    console.log(billing);
    res.json(billing);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
