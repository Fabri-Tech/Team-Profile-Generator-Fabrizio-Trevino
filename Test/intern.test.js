const Intern = require('../Lib/intern');

describe('Intern class', () => {
  it('should create an Intern object', () => {
    const intern = new Intern(
      'Fabrizio Trevino',
      789,
      'fabrizio.trevino@test.com',
      'University of California'
    );
    expect(intern.name).toEqual('Fabrizio Trevino');
    expect(intern.id).toEqual(789);
    expect(intern.email).toEqual('fabrizio.trevino@test.com');
    expect(intern.school).toEqual('University of California');
  });

  it('should return the school of the intern', () => {
    const intern = new Intern(
      'Fabrizio Trevino',
      789,
      'fabrizio.trevino@test.com',
      'University of California'
    );
    expect(intern.getSchool()).toEqual('University of California');
  });

  it('should return the role of the intern', () => {
    const intern = new Intern(
      'Fabrizio Trevino',
      789,
      'fabrizio.trevino@test.com',
      'University of California'
    );
    expect(intern.getRole()).toEqual('Intern');
  });
});
