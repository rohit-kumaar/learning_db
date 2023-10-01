const fs = require("fs");
const path = require("path");
const privateKey = fs.readFileSync(
  path.resolve(__dirname, "../private.key"),
  "utf-8"
);
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const signUp = (req, res) => {
  const user = new User(req.body);
  const token = jwt.sign({ email: req.body.email }, privateKey, {
    algorithm: "RS256",
  });
  const hash = bcrypt.hashSync(req.body.password, saltRounds);
  user.token = token;
  user.password = hash;

  try {
    user.save();
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json(error);
  }
};

const login = async (req, res) => {
  try {
    const doc = await User.findOne({ email: req.body.email });
    const isAuth = bcrypt.compareSync(req.body.password, doc.password);

    if (isAuth) {
      const token = jwt.sign({ email: req.body.email }, privateKey, {
        algorithm: "RS256",
      });
      doc.token = token;

      try {
        doc.save();
        res.json({ token });
      } catch (error) {
        res.status(401).json(error);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

module.exports = {
  signUp,
  login,
};
