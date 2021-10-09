// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('/.utils/generateMarkdown')

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
                name: 'badge',
                message='What is the licence badge for your project?', 
                
            },
            {
                type: 'input',
                name: 'description',
                message='Please provide a brief description of your project',  
            },
            {
                type: 'input',
                name: '',
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
