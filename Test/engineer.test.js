const Engineer = require('../Lib/engineer');

describe('Engineer class', () => {
  it('should create an Engineer object', () => {
    const engineer = new Engineer(
      'Fabrizio Trevino',
      789,
      'fabrizio.trevino@test.com',
      'fabriziotrevino'
    );
    expect(engineer.name).toEqual('Fabrizio Trevino');
    expect(engineer.id).toEqual(789);
    expect(engineer.email).toEqual('fabrizio.trevino@test.com');
    expect(engineer.github).toEqual('fabriziotrevino');
  });

  it('should return the GitHub username of the engineer', () => {
    const engineer = new Engineer(
      'Fabrizio Trevino',
      789,
      'fabrizio.trevino@test.com',
      'fabriziotrevino'
    );
    expect(engineer.getGithub()).toEqual('fabriziotrevino');
  });

  it('should return the role of the engineer', () => {
    const engineer = new Engineer(
      'Fabrizio Trevino',
      789,
      'fabrizio.trevino@test.com',
      'fabriziotrevino'
    );
    expect(engineer.getRole()).toEqual('Engineer');
  });
});
