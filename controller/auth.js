const fs = require("fs");
const path = require("path");
const privateKey = fs.readFileSync(
  path.resolve(__dirname, "../private.key"),
  "utf-8"
);
const User = require("../model/user");
const jwt = require("jsonwebtoken");

const CREATE = (req, res) => {
  const user = new User(req.body);
  const token = jwt.sign({ email: req.body.email }, privateKey, {
    algorithm: "RS256",
  });
  user.token = token;

  try {
    user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  CREATE,
};
