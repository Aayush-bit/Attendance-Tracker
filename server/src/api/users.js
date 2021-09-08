const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.dispatch.OK("User route");
});

module.exports = router;
