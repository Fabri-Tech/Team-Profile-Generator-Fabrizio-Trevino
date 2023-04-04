const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Lib/manager.js');
const Engineer = require('./Lib/engineer.js');
const Intern = require('./Lib/intern.js');
const HTMLCreator = require('./src/HTMLCreator.js');

const teamGenArray = [];

// Manager questions
const managerGen = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the team manager name');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the team manager's employee ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter the team manager employee ID');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter the team manager email address');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log('Please enter the team manager office number');
            return false;
          }
        },
      },
    ])
    .then((managerAnswers) => {
      const { name, id, email, officeNumber } = managerAnswers;
      const newManager = new Manager(name, id, email, officeNumber);
      teamGenArray.push(newManager);
      addEmployee();
    });
};

// Engineer questions
const engineerGen = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the engineer name');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter the engineer employee ID');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter the engineer email address');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter the engineer GitHub username');
            return false;
          }
        },
      },
    ])
    .then((engineerAnswers) => {
      const { name, id, email, officeNumber } = engineerAnswers;
      const newEngineer = new Engineer(name, id, email, github);
      teamGenArray.push(newEngineer);
      addEmployee();
    });
};

// This are the intern questions
const internGen = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: (nameInput) => {
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
        validate: (nameInput) => {
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
        validate: (nameInput) => {
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
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your employee ID');
            return false;
          }
        },
      },
    ])
    .then((internAnswers) => {
      const { name, id, email, school } = internAnswers;
      const newIntern = new Intern(name, id, email, school);
      teamGenArray.push(newIntern);
      addEmployee();
    });
};

managerGen();

function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employeeType',
        message: 'Do you want to add another team member?',
        choices: ['Manager', 'Engineer', 'Intern', 'None'],
      },
    ])
    .then((data) => {
      switch (data.employeeType) {
        case 'Manager':
          managerGen();
          break;
        case 'Engineer':
          engineerGen();
          break;
        case 'Intern':
          internGen();
          break;
        case 'None':
          writeTeamHtmlToFile();
          break;
        default:
          console.log('Invalid input');
      }
    });
}

function writeTeamHtmlToFile() {
  const teamHtml = HTMLCreator(teamGenArray);
  fs.writeFileSync('./Public/team.html', teamHtml);
}
