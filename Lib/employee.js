// Define the Employee class

class Employee {
  // Constructor that takes in name, id, and email

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}
// Exporting the Manager class so it can be used in other files
module.exports = Employee;
