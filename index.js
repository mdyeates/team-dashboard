const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./src/page-template");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const team = [];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`Team created successfully at ${outputPath}`)
  );
}

function generateManager() {
  return inquirer
    .prompt([
      { name: "name", message: "Please enter manager name:" },
      { name: "id", message: "Please enter an ID:" },
      { name: "email", message: "Please enter manager's email address:" },
      { name: "officeNumber", message: "Please enter manager's office number:" },
    ])
    .then((data) => {
      team.push(new Manager(data.name, data.id, data.email, data.officeNumber));
    });
}

function generateEngineer() {
  return inquirer
    .prompt([
      { name: "name", message: "Please enter engineer name:" },
      { name: "id", message: "Please enter engineer ID:" },
      { name: "email", message: "Please enter engineer's email address:" },
      { name: "github", message: "Please enter engineer's GitHub username:" },
    ])
    .then((data) => {
      team.push(new Engineer(data.name, data.id, data.email, data.github));
    });
}

function generateIntern() {
  return inquirer
    .prompt([
      { name: "name", message: "Please enter intern name:" },
      { name: "id", message: "Please enter intern ID:" },
      { name: "email", message: "Please enter intern's email address:" },
      { name: "school", message: "Please enter intern's school name:" },
    ])
    .then((data) => {
      team.push(new Intern(data.name, data.id, data.email, data.school));
    });
}

function showMainMenu() {
  return (
    inquirer
      .prompt({
        type: "list",
        name: "option",
        message: "Please choose an option.",
        choices: [
          { name: "Add an Engineer", value: "engineer" },
          { name: "Add an Intern", value: "intern" },
          { name: "Save & exit", value: "exit" },
        ],
      })
      // eslint-disable-next-line consistent-return
      .then(({ option }) => {
        // eslint-disable-next-line default-case
        switch (option) {
          case "engineer":
            return generateEngineer().then(showMainMenu);
          case "intern":
            return generateIntern().then(showMainMenu);
          case "exit":
            return writeToFile(outputPath, render(team));
        }
      })
  );
}

(function init() {
  console.log(
    "--------------------------------------------------------\nPlease fill in the following details to create your team\n--------------------------------------------------------"
  );
  generateManager().then(showMainMenu);
})();
