var express = require("express");
var router = express.Router();

const {
  getEmployees,
  addEmployee,
  getEmployee,
  deleteEmployee,
  updateEmployee,
  getEmployeesCSV,
} = require("../controllers/empolyeeController");

router.get("/csv", getEmployeesCSV);
router.get("/", getEmployees);
router.post("/", addEmployee);
router.get("/:id", getEmployee);
router.delete("/:id", deleteEmployee);
router.put("/:id", updateEmployee);

module.exports = router;
