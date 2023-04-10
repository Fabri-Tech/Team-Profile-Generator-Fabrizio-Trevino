const inquirer = require('inquirer'); //this package is used to prompt the user with questions and receive their input
const fs = require('fs'); //This package is used to write the generated HTML file
const Manager = require('./Lib/manager.js'); //This is a class that is defined in its respective files
const Engineer = require('./Lib/engineer.js'); //This is a class that is defined in its respective files
const intern = require('./Lib/intern.js'); //This is a class that is defined in its respective files
const htmlCreator = require('./src/htmlCreator.js'); //This will be used to create the HTML with the team roaster
const teamGenArray = []; //This is an empty array that will be used to store the generated employee objects.

// Below you will find all the questions that we will ask for the employees

// These are the manager questions
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
      console.log(newManager);
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
        validate: (nameInput) => {
          if (nameInput) {
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
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the engineer GitHub username');
            return false;
          }
        },
      },
    ])
    .then((engineerAnswers) => {
      const { name, id, email, github } = engineerAnswers;
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
        message: "What is the team's intern name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the team intern name');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the team intern's employee ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter the team intern employee ID');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the team intern's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter the team intern email address');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'schoolName',
        message: "What is the intern's school name?",
        validate: (schoolNameInput) => {
          if (schoolNameInput) {
            return true;
          } else {
            console.log('Please enter the team intern shcool name');
            return false;
          }
        },
      },
    ])
    .then((internAnswers) => {
      const { name, id, email, schoolName } = internAnswers;
      const newintern = new intern(name, id, email, schoolName);
      teamGenArray.push(newintern);
      console.log(newintern);
      addEmployee();
    });
};

managerGen();

function addEmployee() {
  //is called to prompt the user whether to add another employee or to exit the application
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employeeType',
        message: 'Do you want to add another team member?',
        choices: ['Manager', 'Engineer', 'intern', 'None'],
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
        case 'intern':
          internGen();
          break;
        case 'None':
          fs.writeFileSync(
            './Public/teamProfile.html',
            htmlCreator(teamGenArray)
          );
          break;
        default:
          console.log('Invalid input');
      }
    });
}
