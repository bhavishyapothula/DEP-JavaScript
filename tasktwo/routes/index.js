var express = require("express");
var checkLogin = require("../helpers/auth-helper");
var router = express.Router();
router.post("/", function (req, res) {
  const result = checkLogin(req.body.uname, req.body.pass);
  if (result) {
    const username = req.body.uname;
    res.cookie("username", username);
    res.cookie("auth_token", "qwertyuio", { httpOnly: true, maxAge: 1000000 });
    const url = `http://localhost:3000/users/${username}`;
    res.redirect(url);
  } else {
    res.send(404);
  }
});

module.exports = router;
