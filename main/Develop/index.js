// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('/.utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message='What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message='Please enter your installation instructions!',

        },
        {
            type: 'input',
            name: 'usage',
            message='Please enter your usage information',
        },
        {
            type: 'list',
            name: 'license',
            message='Select your license!',
            choices: ["MIT", "Mozilla", "Apachee"],
        },
        {
            type: 'input',
            name: 'test',
            message='Please enter your test information!',
        },
        {
            type: 'input',
            name: 'title',
            message='What is the title of your project?',
        },
        {
            type: 'input',
            name: 'title',
            message='What is the title of your project?',
        },
        {
            type: 'input',
            name: 'title',
            message='What is the title of your project?',
        },
        {
            type: 'input',
            name: 'title',
            message='What is the title of your project?',
        },
        {
            type: 'input',
            name: 'title',
            message='What is the title of your project?',
        },


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return err;
        }
        console.log("success!")
        });
    }

// TODO: Create a function to initialize app
function init() {
    questions().then((answers) => {
        console.log(answers);
        var output = generateMarkdown(answers);
        console.log(output);
        writeToFile("../README.md", output);
    });
}

// Function call to initialize app
init();
