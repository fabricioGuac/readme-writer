// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const mdgen = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'fileName',
    message: 'What is the file name',
    default: 'README.md'
}, {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project',
    default: 'Coming soon'
}, {
    type: 'input',
    name: 'description',
    message: 'Please write a description for the project',
    default: "To be added"
}, {
    type: 'input',
    name: 'installation',
    message: 'Please provide the instructions to properly install the project',
    default: 'N/A'
}, {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage instructions of the project',
    default: "To be added"
}, {
    type: "list",
    name: "license",
    message: "What license will be used?",
    choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License', 'ISC License', 'Mozilla Public License', 'BSD 2-Clause License', 'WTFPL'],
}, {
    type: 'input',
    name: 'tests',
    message: "Please provide information on how to run tests to ensure the project's functionality",
    default: 'At the moment, there are no automated tests implemented for this project.'
}, {
    type: 'input',
    name: 'questions1',
    message: 'Please introduce your GitHub Username',
    default: 'No username provided'
},
{
    type: 'input',
    name: 'questions2',
    message: 'Please introduce your email',
    default:'No email provided'
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, mdgen(data), () => {
        console.log('File created')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {writeToFile(response.fileName, response)
        })
        
}


// Function call to initialize app
init();
