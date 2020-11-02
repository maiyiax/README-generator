const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (required):',
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
        name: 'description',
        message: 'Provide a description of your project (required):',
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
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: "Choose the licenses for your project:",
        choices: ['MIT', 'GNU GPLv3', 'Apache', 'Mozilla Public', 'GNU AGPLv3', 'Boost Software']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List your collaborators, if any:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples of tests written for your application and how to run them:'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username (required):',
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
        message: 'Provide your email address (required):',
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
    fs.writeFile(fileName, data, err => {
        if (err) throw err;

        console.log('README has been generated!')
    });
};

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            return generateReadMe(data);
        })
        .then(data => {
            return writeToFile('README.md', data)
        })
        .catch(err => {
            console.log(err);
        });
};

// function call to initialize program
init();
