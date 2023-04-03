const Employee = require("./Employee");

class Engineer extends Employee {
  role = "Engineer";
  
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub = () => this.github;

  getRole = () => this.role;
}

module.exports = Engineer;
