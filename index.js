const path = require("path");

// Required modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { managerPrompts, engineerPrompts, internPrompts, menuPrompt } = require("./utils/userPrompts");
const render = require("./src/page-template");
const writeToFile = require("./utils/writeFile");

// Empty array to store team members
const team = [];

function generateManager() {
  return managerPrompts().then(({ name, id, email, officeNumber }) => {
    team.push(new Manager(name, id, email, officeNumber));
  });
}

function generateEngineer() {
  return engineerPrompts().then(({ name, id, email, github }) => {
    team.push(new Engineer(name, id, email, github));
  });
}

function generateIntern() {
  return internPrompts().then(({ name, id, email, school }) => {
    team.push(new Intern(name, id, email, school));
  });
}

async function showMainMenu() {
  const outputPath = path.resolve(__dirname, "output", "team.html");

  const menuMap = {
    engineer: generateEngineer,
    intern: generateIntern,
    exit: () => writeToFile(outputPath, render(team)),
  };

  const { option } = await menuPrompt();
  const action = menuMap[option];

  await action();

  if (option === "exit") return;

  showMainMenu();
}

(function init() {
  console.log(
    "--------------------------------------------------------\nPlease fill in the following details to create your team\n--------------------------------------------------------"
  );

  // Prompt user to create a manager first, and then show the menu to add another employee
  generateManager().then(showMainMenu);
})();
