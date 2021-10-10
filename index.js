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
            message:'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'description',
            message:'Please enter a brief description of your project!',

        },
        {
            type: 'input',
            name: 'installation',
            message:'Please enter your installation instructions',
        },
        {
            type: 'input',
            name: 'usage',
            message:'Please enter your usage information!',
        },
/*        {
            type: 'confirm',
            name: 'credits',
            message='Would you like to add any collaborators?',
            default: false,
        },*/
        {
            type: 'list',
            name: 'license',
            message:'Select your license!',
            choices: ["MIT", "Mozilla", "Apachee"],
        },
        {
            type: 'input',
            name: 'test',
            message:'Please enter your text information!',
        },
        {
            type: 'input',
            name: 'gitHub',
            message:'Please enter your GitHub username!',
        },
        {
            type: 'input',
            name: 'email',
            message:'Please enter your email address!',
        },
        {
            type: 'input',
            name: 'additional',
            message:'Feel free to reach me on',
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