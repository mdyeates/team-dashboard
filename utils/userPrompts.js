const inquirer = require("inquirer");

const { validateLength, validateEmail, validateNumber } = require("./validate");

const managerPrompts = () =>
  inquirer.prompt([
    {
      name: "name",
      message: "Please enter manager name:",
      validate: validateLength,
    },
    {
      name: "id",
      message: "Please enter an ID:",
      validate: validateLength,
    },
    {
      name: "email",
      message: "Please enter manager's email address:",
      validate: validateEmail,
    },
    {
      name: "officeNumber",
      message: "Please enter manager's office number:",
      validate: validateNumber,
    },
  ]);

const engineerPrompts = () =>
  inquirer.prompt([
    {
      name: "name",
      message: "Please enter engineer name:",
      validate: validateLength,
    },
    {
      name: "id",
      message: "Please enter engineer ID:",
      validate: validateLength,
    },
    {
      name: "email",
      message: "Please enter engineer's email address:",
      validate: validateEmail,
    },
    {
      name: "github",
      message: "Please enter engineer's GitHub username:",
      validate: validateLength,
    },
  ]);

const internPrompts = () =>
  inquirer.prompt([
    {
      name: "name",
      message: "Please enter intern name:",
      validate: validateLength,
    },
    {
      name: "id",
      message: "Please enter intern ID:",
      validate: validateLength,
    },
    {
      name: "email",
      message: "Please enter intern's email address:",
      validate: validateEmail,
    },
    {
      name: "school",
      message: "Please enter intern's school name:",
      validate: validateLength,
    },
  ]);

const menuPrompts = () =>
  inquirer.prompt({
    type: "list",
    name: "option",
    message: "Please choose an option.",
    choices: [
      { name: "Add an Engineer", value: "engineer" },
      { name: "Add an Intern", value: "intern" },
      { name: "Save & exit", value: "exit" },
    ],
  });

module.exports = { managerPrompts, engineerPrompts, internPrompts, menuPrompts };
