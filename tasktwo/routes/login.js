var express = require("express");
var router = express.Router();
var path = require("path");
router.get(
  "/",
  function (req, res, next) {
    if (req.cookies.auth_token) {
      next();
    } else {
      res.sendFile(path.join(__dirname, "../", "public", "loginForm.html"));
    }
  },
  function (req, res, next) {
    const username = req.cookies["username"];

    const url = `http://localhost:3000/users/${username}`;
    res.redirect(url);
  }
);

module.exports = router;
