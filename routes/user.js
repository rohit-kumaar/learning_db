const express = require("express");
const { GETALL, GET, REPLACE, UPDATE, DELETE } = require("../controller/user");

const router = express.Router();

router.route("/").get(GETALL);
router.route("/:id").get(GET).put(REPLACE).patch(UPDATE).delete(DELETE);

module.exports = router;
