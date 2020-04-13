var express = require("express");
var path = require("path");
var router = express.Router();
const getUser = require("../helpers/user-helper");
const getPosts = require("../helpers/post-helper");
const postData = require("../helpers/posts");
router.get("/", function (req, res, next) {
  const username = req.cookies["username"];
  var result = getUser(username);
  var msg = result.email;
  const mail = JSON.stringify({ message: msg });
  return res.send(mail);
});
router.post("/posts/new", function (req, res, next) {
  const newPost = {
    username: req.cookies["username"],
    post: req.body.content,
  };
  const username = req.cookies["username"];
  postData.unshift(newPost);
  const url = `http://localhost:3000/users/${username}`;
  res.redirect(url);
});
router.get("/posts", function (req, res, next) {
  const posts = getPosts();
  var msg = " ";
  for (var i = 0; i < posts.length; i++) {
    msg +=
      "uername: " + posts[i].username + "\n" + "post: " + posts[i].post + "\n";
    msg +=
      "........................................................................." +
      "\n";
  }

  const result = JSON.stringify({ message: msg });
  return res.send(result);
});

router.get("/:username", function (req, res, next) {
  const pathParams = req.params;
  const user = getUser(pathParams.username);
  if (req.cookies["username"] !== pathParams.username) {
    res.sendFile(path.join(__dirname, "../", "public", "loginForm.html"));
  } else {
    res.sendFile(path.join(__dirname, "../", "public", "postForm.html"));
  }
});

module.exports = router;
