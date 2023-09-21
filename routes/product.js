const express = require("express");
const {
  CREATE,
  GETALL,
  GET,
  REPLACE,
  UPDATE,
  DELETE,
} = require("../controller/product");

const router = express.Router();

router.route("/").post(CREATE).get(GETALL);
router.route("/:id").get(GET).put(REPLACE).patch(UPDATE).delete(DELETE);

module.exports = router;
