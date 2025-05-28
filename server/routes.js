var express = require("express");
var app = express();

// Defining all the routes
var index = require("./routes/index");
var employeeRoutes = require("./routes/employeeRoutes");

// Linking all the routes
app.use("/", index);
app.use("/api/employees", employeeRoutes);

module.exports = app;
