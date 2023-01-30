const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber = () => this.officeNumber;

  getRole = () => this.constructor.name;
}

module.exports = Manager;
