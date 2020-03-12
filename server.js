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

// * Add new department, role, or employee

// * View departments, roles, employees

// * Update employee roles

// Make functions for each search
// Find and make delete/updates
// Determine HTML content
// Ask Queries
// Provide results

// function  startApp(){
//   connection.connect((err) => {
//       if (err) throw err;
//       // console.log("Connected at " + connection.threadId)
//   })
//   }


function appMenu() {

  

  function observeTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "doMore",
        message: "How would you like to observe today?",
        choices: [
          "View departments, roles, and employees",
          "Add new department, role, or employee",
          "Update employee roles",
          "Exit"
        ]
      }
    ]).then(userChoice => {
      switch(userChoice.doMore) {
      case "View departments, roles, and employees":
        viewAll();
        whatElse();
        break;
      case "Add new department, role, or employee":
        addShit()
        break;
      case "Update employee roles":
        updateShit()
        break;
      case "Exit":
        process.exit();
      }
    });
  }

  function whatElse() {
    inquirer.prompt([
      {
        type: "list",
        name: "doMore",
        message: "Would you like to observe some more?",
        choices: [
          "View departments, roles, and employees",
          "Add new department, role, or employee",
          "Update employee roles",
          "Exit"
        ]
      }
    ]).then(userChoice => {
      switch(userChoice.doMore) {
      case "View departments, roles, and employees":
        viewAll();
        whatElse();
        break;
      case "Add new department, role, or employee":
        addShit()
        break;
      case "Update employee roles":
        updateShit()
        break;
      case "Exit":
        process.exit();
      }
    });
  }

  function addShit(){
    inquirer.prompt([
      {
        type: "list",
        name: "addChoices",
        message: "What will you be adding today?",
        choices: [
          "Add Department",
          "Add Role",
          "Add Employee",
          "Exit"
        ]
      }
    ]).then(addChoice => {
      switch(addChoice.addChoices) {
      case "Add Department":
        addDept();
        break;
      case "Add Role":
        addRole();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Exit":
        process.exit();
      }
    });
  }

  function updateShit(){
    inquirer.prompt([
      {
        type: "input",
        name: "paramChoices",
        message: "Please enter role by title.",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      }
    ]).then(answer => {
      console.log(answer.paramChoices,);
      updateByTitle();
    });
  }

  function updateByTitle(){
    viewAll();
    whatElse();
  }

  function addDept() {
    inquirer.prompt([
      {
        type: "input",
        name: "addDeptName",
        message: "Please enter department name.",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      }
    ]).then(answer => {
    connection.query("INSERT INTO department (name) VALUES (?)", [answer.addDeptName])
      whatElse();
    })
    
  }
  
  function addRole() {
    inquirer.prompt([
      {
        type: "input",
        name: "addTitle",
        message: "Please enter new obligation title.",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "addSalary",
        message: "Please enter salary (Decimal Format: #####.##)",
        validate: answer => {
          if (Number.isInteger(answer.addSalary) !== true && answer !== "") {
            parseFloat(answer.addSalary)
            return true;
          }
          return "Please enter a valid answer.";
        }
      },
      {
        type: "input",
        name: "addDept",
        message: "Please enter Department ID.",
        validate: answer => {
          const pass = answer.match(
            /^[1-9|.]\d*$/
          );
          if (pass) {
            // connection.query("SELECT CONVERT("+answer.addDept+", CHAR)")
            parseInt(answer.addDept)
            return true;
          }
          return "Please enter a valid answer.";
        }
      }
    ]).then(answer => {
    // var salary = addZeroes(parseFloat(answer.addSalary));
    addRole();
    // var salary = parseFloat(answer.addSalary)
    // var dept = parseInt(answer.addDept)
    // function r

    // var newAnswer = parseFloat(answer.addSalary)
    // function addToRoles(title, salary, dept){
      // connection.query("INSERT INTO role (title, salary, department_id) VALUES (?)", [answer.addTitle, '333.33', '3'])
      // function(err, res) {
      //   if (err) throw err;
        // console.log(result);
      // });
      // connection.query("INSERT INTO role (salary) VALUES (?)", [answer.addSalary])
      // connection.query("INSERT INTO role (department_id) VALUES (?)", [answer.addDept])
      // }
    // addToRoles(answer.addTitle, answer.addSalary, answer.addDept)

      whatElse();
      break;
    })
    // function addZeroes(num) {
    //   const dec = num.split('.')[1]
    //   const len = dec && dec.length > 2 ? dec.length : 2
    //   return Number(num).toFixed(len)
    // }
  }
  
  function addEmployee() {
    viewAll();
    whatElse();
  }

  function addRole() {
    inquirer.prompt([
      {
        type: "input",
        name: "addTitle",
        message: "Please enter new obligation title.",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "addSalary",
        message: "Please enter salary (Decimal Format: #####.##)",
        validate: answer => {
          if (Number.isInteger(answer.addSalary) !== true && answer !== "") {
            parseFloat(answer.addSalary)
            return true;
          }
          return "Please enter a valid answer.";
        }
      },
      {
        type: "input",
        name: "addDept",
        message: "Please enter Department ID.",
        validate: answer => {
          const pass = answer.match(
            /^[1-9|.]\d*$/
          );
          if (pass) {
            // connection.query("SELECT CONVERT("+answer.addDept+", CHAR)")
            parseInt(answer.addDept)
            return true;
          }
          return "Please enter a valid answer.";
        }
      }
    ]).then(answer => {
    // var salary = addZeroes(parseFloat(answer.addSalary));
  
    // var salary = parseFloat(answer.addSalary)
    // var dept = parseInt(answer.addDept)
    
      // connection.query("INSERT INTO role (salary) VALUES (?)", [answer.addSalary])
      // connection.query("INSERT INTO role (department_id) VALUES (?)", [answer.addDept])
      // }
    // addToRoles(answer.addTitle, answer.addSalary, answer.addDept)
      addRole(answer.addTitle, answer.addSalary, answer.addDept);
      whatElse();
    })
    // function addZeroes(num) {
    //   const dec = num.split('.')[1]
    //   const len = dec && dec.length > 2 ? dec.length : 2
    //   return Number(num).toFixed(len)
    // }
    function addRole(title, salary, dept){
      // var newAnswer = parseFloat(answer.addSalary)
      // function addToRoles(title, salary, dept){
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (" + ['"'+title+'"', salary, dept] + ");",
        function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      }
  }

  observeTeam();
}




function viewAll() {
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
  readDepartments();
  readRoles();
  readEmployees();
}






// startApp();
appMenu()


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
















