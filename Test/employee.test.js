const Employee = require('../Lib/employee');

describe('Employee class', () => {
  it('should create an employee object', () => {
    const emp = new Employee(
      'Fabrizio Trevino',
      123,
      'fabrizio.trevino@test.com'
    );
    expect(emp.name).toEqual('Fabrizio Trevino');
    expect(emp.id).toEqual(123);
    expect(emp.email).toEqual('fabrizio.trevino@test.com');
  });

  it('should return the name of the employee', () => {
    const emp = new Employee(
      'Fabrizio Trevino',
      123,
      'fabrizio.trevino@test.com'
    );
    expect(emp.getName()).toEqual('Fabrizio Trevino');
  });

  it('should return the id of the employee', () => {
    const emp = new Employee(
      'Fabrizio Trevino',
      123,
      'fabrizio.trevino@test.com'
    );
    expect(emp.getId()).toEqual(123);
  });

  it('should return the email of the employee', () => {
    const emp = new Employee(
      'Fabrizio Trevino',
      123,
      'fabrizio.trevino@test.com'
    );
    expect(emp.getEmail()).toEqual('fabrizio.trevino@test.com');
  });

  it('should return the role of the employee', () => {
    const emp = new Employee(
      'Fabrizio Trevino',
      123,
      'fabrizio.trevino@test.com'
    );
    expect(emp.getRole()).toEqual('Employee');
  });
});
