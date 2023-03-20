const inquirer = require("inquirer");
const fs = require("fs");

const teamGenArray = [];

// these are the manager questions
const managerGen = () => {
    return inquirer .prompt([
        {
            type: "input",
            name: "name",
            message: "what is your name?",
            Validate:(nameInput) => {
                if(nameInput){
                    return true
                }
                else {
                    console.log("Please enter your name");
                    return false;

                }
            
            },       
        },
        {
            type: "input",
            name: "name",
            message: "what is your enamil address?",
            Validate:(nameInput) => {
                if(nameInput){
                    return true
                }
                else {
                    console.log("Please enter your email address");
                    return false;

                }
            
            },       
        },
        {
            type: "input",
            name: "name",
            message: "what is your name?",
            Validate:(nameInput) => {
                if(nameInput){
                    return true
                }
                else {
                    console.log("Please enter your name");
                    return false;

                }
            
            },       
        },
        {
            type: "input",
            name: "name",
            message: "what is your employee ID?",
            Validate:(nameInput) => {
                if(nameInput){
                    return true
                }
                else {
                    console.log("Please enter your employee ID");
                    return false;

                }
            
            },       
        },     

    ])
    .then((managerAnswers) => {
        const {name, ID, email, officeNumber} = managerAnswers;
        const newManager = managerInfo (name, ID, email, officeNumber);no
        teamGenArray.push(newManager),
        console.log(newManager);
    }
    )
};

// These are the engeneer questions
const engeneerGen = () => {
    return inquirer .prompt([
        {
            type: "input",
            name: "name",
            message: "what is your name?",
            Validate:(nameInput) => {
                if(nameInput){
                    return true
                }
                else {
                    console.log("Please enter your name");
                    return false;

                }
            
            },       
        },
        {
            type: "input",
            name: "name",
            message: "what is your enamil address?",
            Validate:(nameInput) => {
                if(nameInput){
                    return true
                }
                else {
                    console.log("Please enter your email address");
                    return false;

                }
            
            },       
        },
        {
            type: "input",
            name: "name",
            message: "what is your name?",
            Validate:(nameInput) => {
                if(nameInput){
                    return true
                }
                else {
                    console.log("Please enter your name");
                    return false;

                }
            
            },       
        },
        {
            type: "input",
            name: "name",
            message: "what is your employee ID?",
            Validate:(nameInput) => {
                if(nameInput){
                    return true
                }
                else {
                    console.log("Please enter your employee ID");
                    return false;

                }
            
            },       
        },     

    ])
};

// This are the intern questions
const internGen = () => {
    return inquirer .prompt([
        {
            type: "input",
            name: "name",
            message: "what is your name?",
            Validate:(nameInput) => {
                if(nameInput){
                    return true
                }
                else {
                    console.log("Please enter your name");
                    return false;

                }
            
            },       
        },
        {
            type: "input",
            name: "name",
            message: "what is your enamil address?",
            Validate:(nameInput) => {
                if(nameInput){
                    return true
                }
                else {
                    console.log("Please enter your email address");
                    return false;

                }
            
            },       
        },
        {
            type: "input",
            name: "name",
            message: "what is your name?",
            Validate:(nameInput) => {
                if(nameInput){
                    return true
                }
                else {
                    console.log("Please enter your name");
                    return false;

                }
            
            },       
        },
        {
            type: "input",
            name: "name",
            message: "what is your employee ID?",
            Validate:(nameInput) => {
                if(nameInput){
                    return true
                }
                else {
                    console.log("Please enter your employee ID");
                    return false;

                }
            
            },       
        },     

    ])
};
            