// TODO: Include packages needed for this application

const markdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs")


// TODO: Create an array of questions for user input
const questions = [
    {
        question: 'Please enter the TITLE of your project: ',
        name: "Title"
    },
    {
        question: 'Please enter a DESCRIPTION of your project: ',
        name: "Description"
    },
    {
        question: 'Please enter the INSTALLATION INSTRUCTIONS: ',
        name: "Installation"
    },
    {
        question: 'Please enter the USAGE INFORMATION: ',
        name: "Usage"
    },
    {
        question: 'Please enter the CONTRIBUTION GUIDELINES: ',
        name: "Contribution"
    },
    {
        question: 'Please enter the TEST INSTRUCTIONS: ',
        name: "Test",
    },
    {
        type: 'list',
        question: 'Please enter a license: ',
        name: "License",
        choices: ['MIT', 'Eclipse', 'ISC', 'GNU', 'IBM', 'Mozilla', 'Zlib']
    },
    {
        question: 'Please enter your GITHUB Username: ',
        name: "Github"
    },
    {
        question: 'Please enter your EMAIL: ',
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
