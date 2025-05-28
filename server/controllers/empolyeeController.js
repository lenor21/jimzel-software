var mysqlpool = require("../dbconfig");

// @desc: get all employees
// @route: GET /api/employees
const getEmployees = (req, res) => {
  mysqlpool.getConnection(function (err, connection) {
    const selectQuery = "SELECT * FROM employees";

    connection.query(selectQuery, function (error, results) {
      connection.release();

      if (error) {
        res.status(500).json({
          message: "Failed to retrieve employees",
          error: error.message,
        });
      }

      res.status(200).json(results);
    });
  });
};

// @desc: get a employee
// @route: GET /api/employees/:id
const getEmployee = (req, res) => {
  const employeeId = req.params.id;

  mysqlpool.getConnection(function (err, connection) {
    const selectQuery = "SELECT * FROM employees WHERE id = ?";

    connection.query(selectQuery, [employeeId], function (error, result) {
      connection.release();

      if (error) {
        res.status(500).json({
          message: "Failed to get employee",
        });
      }

      if (result.length === 0) {
        res.status(404).json({ message: "Employee not found" });
      }

      res.status(200).json(result[0]);
    });
  });
};

// @desc: get a employee
// @route: GET /api/employees/:id
const deleteEmployee = (req, res) => {
  const employeeId = req.params.id;

  mysqlpool.getConnection(function (err, connection) {
    const deleteQuery = "DELETE FROM employees WHERE id = ?";

    connection.query(deleteQuery, [employeeId], function (error, result) {
      connection.release();

      if (error) {
        res.status(500).json({
          message: "Failed to delete employee",
        });
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Employee not found" });
      }

      res.status(200).json({ message: "User deleted successfully" });
    });
  });
};

module.exports = { getEmployees, getEmployee, deleteEmployee };
