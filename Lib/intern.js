const Employee = require("./Employee");

class Intern extends Employee {
  #role = "Intern";

  constructor(name, id, email, school) {
    super(name, id, email);
    this.#school = school;
  }

  getSchool = () => this.#school;

  getRole = () => this.#role;
}

module.exports = Intern;
