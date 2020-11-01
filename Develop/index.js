const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user Project Info
const questions = [
    {
        type: 'input',
        name: 'Project',
        message: 'What is the name of your project? (required)',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of your project (required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use'
    },
    {
        type: 'checkbox',
        name: 'License',
        message: "Choose the licenses for your project",
        choices: ['MIT', 'GNU GPLv3', 'Apache', 'Mozilla Public', 'GNU AGPLv3', 'Boost Software']
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'List your collaborators, if any',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Provide examples of tests written for your application and how to run them'
    }
];
 // questions for user Info
const personalInfo = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username (required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email address (required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide your email address!');
                return false;
            }
        }
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
