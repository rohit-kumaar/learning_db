const express = require("express");
const {
  CREATE,
  GETALL,
  GET,
  REPLACE,
  UPDATE,
  DELETE,
} = require("../controller/user");

const router = express.Router();

router
  .post("/", CREATE)
  .get("/", GETALL)
  .get("/:id", GET)
  .put("/:id", REPLACE)
  .patch("/:id", UPDATE)
  .delete("/:id", DELETE);

module.exports = router;
