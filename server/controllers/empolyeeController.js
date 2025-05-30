var mysqlpool = require("../dbconfig");
const asyncHandler = require("express-async-handler");

// @desc: get all employees
// @route: GET /api/employees
const getEmployees = asyncHandler(async (req, res) => {
  let connection;

  // pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;
  const skip = (page - 1) * limit;

  try {
    connection = await mysqlpool.getConnection();

    const countQuery = "SELECT COUNT(*) AS totalCount FROM employees";
    const [countResults] = await connection.query(countQuery);
    const totalCount = countResults[0].totalCount;

    const selectQuery = `
      SELECT *
      FROM employees
      ORDER BY id DESC
      LIMIT ? OFFSET ?
    `;
    const [employees] = await connection.query(selectQuery, [limit, skip]);

    const totalPages = Math.ceil(totalCount / limit);

    res.status(200).json({
      employees,
      pagination: {
        totalCount,
        totalPages,
        currentPage: page,
        limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve employees",
      error: error.message,
    });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

// @desc: add an employee
// @route: POST /api/employees
const addEmployee = asyncHandler(async (req, res) => {
  const userData = req.body;
  let connection;

  if (!userData.username || !userData.email) {
    res.status(400).json({ message: "Please fill all update fields" });
  }

  try {
    connection = await mysqlpool.getConnection();

    const employeeExistsQuery = "SELECT id FROM employees WHERE email = ?";
    const [existingEmployee] = await connection.query(employeeExistsQuery, [
      userData.email,
    ]);

    if (existingEmployee.length > 0) {
      res.status(400).json({ message: "User with that email already exists." });
    }

    const addQuery = `INSERT INTO employees (username, email) VALUES (?, ?)`;
    const [result] = await connection.query(addQuery, [
      userData.username,
      userData.email,
    ]);

    if (result.affectedRows === 0 || !result.insertId) {
      res
        .status(500)
        .json({ message: "Failed to add employee to the database." });
    }

    const [newEmployeeResults] = await connection.query(
      "SELECT * FROM employees WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json(newEmployeeResults[0]);
  } catch (error) {
    res.status(500).json({
      message: "Failed to add employee",
      error: error.message,
    });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

// @desc: get an employee
// @route: GET /api/employees/:id
const getEmployee = asyncHandler(async (req, res) => {
  const employeeId = req.params.id;
  let connection;

  try {
    connection = await mysqlpool.getConnection();
    const sqlQuery = "SELECT * FROM employees WHERE id = ?";

    const [results] = await connection.query(sqlQuery, [employeeId]);

    if (results.length === 0) {
      res.status(404).json({
        message: "Employee not found.",
      });
    }

    res.status(200).json(results[0]);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve employee",
      error: error.message,
    });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

// @desc: delete an employee
// @route: DELETE /api/employees/:id
const deleteEmployee = asyncHandler(async (req, res) => {
  const employeeId = req.params.id;
  let connection;

  try {
    connection = await mysqlpool.getConnection();

    const findEmployeeQuery = "SELECT * FROM employees WHERE id = ?";
    const [foundEmployee] = await connection.query(findEmployeeQuery, [
      employeeId,
    ]);

    if (foundEmployee.length === 0) {
      res.status(404).json({
        message: "Employee not found.",
      });
    }

    const deleteEmployee = foundEmployee[0];

    const deleteQuery = "DELETE FROM employees WHERE id = ?";
    const [deletedEmployee] = await connection.query(deleteQuery, [employeeId]);

    if (deletedEmployee.affectedRows === 0) {
      res.status(500).json({
        message: "Failed to delete employee",
      });
    }

    res.status(200).json({
      message: `Employee ${deleteEmployee.username} deleted successfully.`,
      deletedEmployee: deleteEmployee,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve employees",
      error: error.message,
    });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

// @desc: update an employee
// @route: PUT /api/employees/:id
const updateEmployee = asyncHandler(async (req, res) => {
  const employeeId = req.params.id;
  const userData = req.body;
  let connection;

  if (!userData.username || !userData.email) {
    res.status(400).json({ message: "Please fill all update fields" });
  }

  try {
    connection = await mysqlpool.getConnection();

    const updateQuery = `UPDATE employees SET username = '${userData.username}', email = '${userData.email}', updated_at = CURRENT_TIMESTAMP WHERE id = ${employeeId}`;

    const [result] = await connection.query(updateQuery, [
      userData,
      employeeId,
    ]);

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Employee not found" });
    }

    const [updatedEmployee] = await connection.query(
      "SELECT * FROM employees WHERE id = ?",
      [employeeId]
    );

    res.status(200).json(updatedEmployee[0]);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update employees",
      error: error.message,
    });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

module.exports = {
  getEmployees,
  addEmployee,
  getEmployee,
  deleteEmployee,
  updateEmployee,
};
