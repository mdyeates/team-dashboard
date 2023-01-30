const fs = require("fs");

// Helper function to create a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`Team created successfully at ${fileName}`)
  );
}

const createTeam = (function () {
  const team = [];

  return {
    addToTeam: (member) => {
      team.push(member);
    },
    getTeam: () => team,
  };
})();

module.exports = { writeToFile, createTeam };
