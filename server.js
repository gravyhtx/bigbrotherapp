var express = require("express");
var inquirer = require("inquirer");
var mysql = require("mysql")

var app = express();

var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employees_db"
});

// * Add departments, roles, employees

// * View departments, roles, employees

// * Update employee roles


// Make functions for each search
// Find and make delete/updates
// Determine HTML content
// Ask Queries
// Provide results

function  viewAll(){
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected at " + connection.threadId)
    readDepartments();
    readRoles();
    readEmployees();
    // viewDepartments();
    // viewRoles();
    // viewEmployees();
})
}
viewAll();



function readDepartments() {
  connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log("Departments")
    console.table(res);
    
  });
}
function readRoles() {
  connection.query("SELECT * FROM role", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log("Roles")
    console.table(res);
    
  });
}
function readEmployees() {
  connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log("Employees")
    console.table(res);
    
  });
}





app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });


  // function viewDepartments() {
//   var queryString = "SELECT ?? FROM department";
//   connection.query(queryString, ["name"], function(err, result) {
//     if (err) throw err;
//     console.log("Departments\n" + result);
    
//   });
// }

// function viewRoles() {
//   var queryString = "SELECT ?? FROM role";
//   connection.query(queryString, ["title", "salary", "department_id"], function(err, result) {
//     if (err) throw err;
//     console.log("Roles\n" + result);
    
//   });
// }
  

// function viewEmployees() {
//   var queryString = "SELECT ?? FROM employee";
//   connection.query(queryString, ["first_name", "last_name", "role_id"], function(err, result) {
//     if (err) throw err;
//     console.log("Employees\n" + result);
    
//   });
// }  