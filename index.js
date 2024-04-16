// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },

    {
        type: '',
        message: '',
        name: 'description',
    },

    {
        type: '',
        message: '',
        name: 'toc',
    },

    {
        type: '',
        message: '',
        name: 'installation',
    },

    {
        type: '',
        message: '',
        name: 'usage',
    },
    
    {
        type: 'list',
        message: 'What license would you like to use for your project?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },

    {
        type: '',
        message: '',
        name: 'contributing',
    },

    {
        type: '',
        message: '',
        name: 'tests',
    },

    {
        type: '',
        message: '',
        name: 'questions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFileSync();
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        writeToFile('README.md', generateMarkdown({ ...userAnswers}));
    })
}

// Function call to initialize app
init();
