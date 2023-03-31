const inquirer = require('inquirer');
const fs = require('fs');

const teamGenArray = [];

// these are the manager questions
const managerGen = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        Validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your email address?',
        Validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your email address');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your office number?',
        Validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your office nummber');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your employee ID?',
        Validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your employee ID');
            return false;
          }
        },
      },
    ])
    .then((managerAnswers) => {
      const { name, ID, email, officeNumber } = managerAnswers;
      const newManager = managerInfo(name, ID, email, officeNumber);
      teamGenArray.push(newManager), console.log(newManager);
      addemploye();
    });
};

// These are the engeneer questions
const engeneerGen = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      Validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your email address?',
      Validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your email address');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your GitHub username?',
      Validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your employee ID?',
      Validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your employee ID');
          return false;
        }
      },
    },
  ]);
};

// This are the intern questions
const internGen = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      Validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your email address?',
      Validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your email address');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your school name?',
      Validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your School name');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your employee ID?',
      Validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your employee ID');
          return false;
        }
      },
    },
  ]);
};

managerGen();

