// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');

// create writeFile function using promises instead of a callback function
const saveMarkdown = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a detailed description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Write the usage information.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Describe the contribution guidelines.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'license type',
            choices: ['MIT', 'Apachae', 'GPL', 'None']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
        }
    ])
};


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     console.log('data', data);

// }

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((data) => saveMarkdown('README.md', generateMarkdown(data))) // generateMarkdown is a guess, generateHTML doesn't work
        .then(() => console.log('Wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();


