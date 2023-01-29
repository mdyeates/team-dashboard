const inquirer = require("inquirer");
const { validateLength, validateEmail, validateLengthAndNumber } = require("./validateInput");

// Prompts for general information
const generalPrompts = (position) => [
  {
    name: "name",
    message: `Enter the full name of the ${position}:`,
    validate: validateLength,
  },
  {
    name: "id",
    message: `Enter the ${position}'s unique ID number:`,
    validate: validateLengthAndNumber,
  },
  {
    name: "email",
    message: `Enter the ${position}'s email address:`,
    validate: validateEmail,
  },
];

// Prompts for independent manager information
const managerPrompts = () =>
  inquirer.prompt([
    ...generalPrompts("Manager"),
    {
      name: "officeNumber",
      message: "Enter the Manager's office number:",
      validate: validateLengthAndNumber,
    },
  ]);

// Prompts for independent engineer information
const engineerPrompts = () =>
  inquirer.prompt([
    ...generalPrompts("Engineer"),
    {
      name: "github",
      message: "Enter the Engineer's GitHub username:",
      validate: validateLength,
    },
  ]);

// Prompts for independent intern information
const internPrompts = () =>
  inquirer.prompt([
    ...generalPrompts("Intern"),
    {
      name: "school",
      message: "Enter the Intern's school name:",
      validate: validateLength,
    },
  ]);

// Prompt to add an employee or save and exit the program
const menuPrompt = () =>
  inquirer.prompt({
    type: "list",
    name: "option",
    message: "Please select an option:",
    choices: [
      { name: "Add an Engineer", value: "engineer" },
      { name: "Add an Intern", value: "intern" },
      { name: "Save & exit", value: "exit" },
    ],
  });

module.exports = { managerPrompts, engineerPrompts, internPrompts, menuPrompt };
