var express = require("express");
var router = express.Router();
var path = require("path");
router.get("/", function (req, res, next) {
  if (req.cookies["username"] === undefined) {
    res.sendFile(path.join(__dirname, "../", "public", "loginForm.html"));
  } else {
    const username = req.cookies["username"];

    const url = `http://localhost:3000/users/${username}`;
    res.redirect(url);
  }
});

module.exports = router;
