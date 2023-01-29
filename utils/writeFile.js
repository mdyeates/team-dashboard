const fs = require("fs");

// Helper function to create a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`Team created successfully at ${fileName}`)
  );
}

module.exports = writeToFile;
