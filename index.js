// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message:'What is the project title?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project:');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'description',
            message:'Write a brief description of your project:',

        },
        {
            type: 'input',
            name: 'installation',
            message:'Describe the installation process (not required)',
        },
        {
            type: 'input',
            name: 'usage',
            message:'What is this project usage for?',
        },
        {
            type: 'list',
            name: 'license',
            message:'Please select a licencse for your project:',
            choices: ["MIT", "ISC", "Apache", "GNU GPLv2"],
        },
        {
            type: 'input',
            name: 'test',
            message:'Will this project require a test?',
        },
        {
            type: 'input',
            name: 'gitHub',
            message:'Please enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message:'Please enter your email address:',
        },
    ]);
}    


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
                writeToFile("../Develop/README.md", output);
                if(answers.collaborators) {
                    inquirer.prompt([
                    {
                        type: 'rawlist',
                        name: 'Enter'
                    }
                ])
            }
        });      
    }

// Function call to initialize app
init();