var express = require("express");
var router = express.Router();

const {
  getEmployees,
  getEmployee,
  deleteEmployee,
} = require("../controllers/empolyeeController");

router.get("/", getEmployees);
router.get("/:id", getEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
