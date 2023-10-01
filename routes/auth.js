const express = require("express");
const { CREATE } = require("../controller/auth");

const router = express.Router();

router.route("/signUp").post(CREATE);

module.exports = router;
