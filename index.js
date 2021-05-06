// TODO: Include packages needed for this application

const markdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs")


// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'Please enter the TITLE of your project: ',
        name: "Title"
    },
    {
        message: 'Please enter a DESCRIPTION of your project: ',
        name: "Description"
    },
    {
        message: 'Please enter the INSTALLATION INSTRUCTIONS: ',
        name: "Installation"
    },
    {
        message: 'Please enter the USAGE INFORMATION: ',
        name: "Usage"
    },
    {
        message: 'Please enter the CONTRIBUTION GUIDELINES: ',
        name: "Contribution"
    },
    {
        message: 'Please enter the TEST INSTRUCTIONS: ',
        name: "Test",
    },
    {
        type: 'list',
        message: 'Please enter a license: ',
        name: "License",
        choices: ['MIT', 'Eclipse', 'ISC', 'GNU', 'IBM', 'Mozilla', 'Zlib']
    },
    {
        message: 'Please enter your GITHUB Username: ',
        name: "Github"
    },
    {
        message: 'Please enter your EMAIL: ',
        name: "Email"
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Successfully created README file!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => writeToFile("README.md", markdown.generateText(data)))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
