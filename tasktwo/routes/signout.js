var express = require("express");
var router = express.Router();
router.get("/", function (req, res) {
  res.clearCookie("username");
  res.clearCookie("auth_token");
  const url = `http://localhost:3000`;
  res.redirect(url);
});

module.exports = router;
