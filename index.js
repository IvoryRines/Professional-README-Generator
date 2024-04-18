// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Please provide a description of your project:',
        name: 'description',
    },

    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },

    {
        type: 'input',
        message: 'Please provide usage instructions:',
        name: 'usage',
    },
    
    {
        type: 'list',
        message: 'What license did you use for your project?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },

    {
        type: 'input',
        message: 'Please provide contribution guidelines:',
        name: 'contributing',
    },

    {
        type: 'input',
        message: 'Please provide test documentation:',
        name: 'tests',
    },

    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'username',
    },

    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
    },
];

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// A function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        writeToFile('README.md', generateMarkdown({ ...userAnswers}));
    })
}

// Function call to initialize app
init();
