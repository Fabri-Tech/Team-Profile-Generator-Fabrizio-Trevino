const Manager = require('../Lib/manager');

describe('Manager class', () => {
  it('should create a Manager object', () => {
    const manager = new Manager(
      'Fabrizio Trevino',
      456,
      'fabrizio.trevino@test.com',
      'A123'
    );
    expect(manager.name).toEqual('Fabrizio Trevino');
    expect(manager.id).toEqual(456);
    expect(manager.email).toEqual('fabrizio.trevino@test.com');
    expect(manager.officeNumber).toEqual('A123');
  });

  it('should return the office number of the manager', () => {
    const manager = new Manager(
      'Fabrizio Trevino',
      456,
      'fabrizio.trevino@test.com',
      'A123'
    );
    expect(manager.getOfficeNumber()).toEqual('A123');
  });

  it('should return the role of the manager', () => {
    const manager = new Manager(
      'Fabrizio Trevino',
      456,
      'fabrizio.trevino@test.com',
      'A123'
    );
    expect(manager.getRole()).toEqual('Manager');
  });
});
