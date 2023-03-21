class Employee {
    #role = "Employee";
    
    constructor(name, id, email) {
      this.#name = name;
      this.#id = id;
      this.#email = email;
    }
  
    getName = () => this.#name;
  
    getId = () => this.#id;
  
    getEmail = () => this.#email;
  
    getRole = () => this.#role;
  }
  
  module.exports = Employee;
  