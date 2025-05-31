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

  if (
    !userData.employee_id ||
    !userData.first_name ||
    !userData.last_name ||
    !userData.email ||
    !userData.pay_freq ||
    !userData.birthday ||
    !userData.date_hired ||
    !userData.tax_id ||
    !userData.sss_gsis ||
    !userData.phic_id ||
    !userData.hdmf_id
  ) {
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

    const addQuery = `INSERT INTO employees (
      employee_id,
      first_name,
      middle_name,
      last_name,
      suffix,
      address,
      city,
      province,
      zip,
      location,
      department,
      project,
      team,
      position,
      employment,
      user_profile,
      manager,
      vendor,
      email,
      phone,
      ctc,
      ctc_place,
      ctc_date,
      ctc_amount_paid,
      notes,
      pay_freq,
      sex,
      active,
      birthday,
      date_hired,
      kasambahay,
      regularized,
      separated,
      contract_start,
      contract_end,
      minimum_earner,
      minimum_daily,
      minimum_monthly,
      tax_id,
      tax_witheld,
      sss_gsis,
      sss_gsis_witheld,
      phic_id,
      phic_witheld,
      hdmf_id,
      hdmf_witheld,
      hdmf_account,
      bank,
      bank_account,
      rate_type,
      base_monthly_pay,
      days_per_month,
      hours_per_day,
      daily_rate,
      hourly_rate,
      col_allowance,
      represent_allowance,
      housing_allowance,
      transportation_allowance
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    // const addQuery = `INSERT INTO employees (employee_id, first_name, middle_name, email) VALUES (?,?,?,?)`;

    // const [result] = await connection.query(addQuery, [
    //   userData.employee_id,
    //   userData.first_name,
    //   userData.middle_name,
    //   userData.email,
    // ]);

    const [result] = await connection.query(addQuery, [
      userData.employee_id,
      userData.first_name,
      userData.middle_name,
      userData.last_name,
      userData.suffix,
      userData.address,
      userData.city,
      userData.province,
      userData.zip,
      userData.location,
      userData.department,
      userData.project,
      userData.team,
      userData.position,
      userData.employment,
      userData.user_profile,
      userData.manager,
      userData.vendor,
      userData.email,
      userData.phone,
      userData.ctc,
      userData.ctc_place,
      userData.ctc_date,
      userData.ctc_amount_paid,
      userData.notes,
      userData.pay_freq,
      userData.sex,
      userData.active,
      userData.birthday,
      userData.date_hired,
      userData.kasambahay,
      userData.regularized,
      userData.separated,
      userData.contract_start,
      userData.contract_end,
      userData.minimum_earner,
      userData.minimum_daily,
      userData.minimum_monthly,
      userData.tax_id,
      userData.tax_witheld,
      userData.sss_gsis,
      userData.sss_gsis_witheld,
      userData.phic_id,
      userData.phic_witheld,
      userData.hdmf_id,
      userData.hdmf_witheld,
      userData.hdmf_account,
      userData.bank,
      userData.bank_account,
      userData.rate_type,
      userData.base_monthly_pay,
      userData.days_per_month,
      userData.hours_per_day,
      userData.daily_rate,
      userData.hourly_rate,
      userData.col_allowance,
      userData.represent_allowance,
      userData.housing_allowance,
      userData.transportation_allowance,
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
