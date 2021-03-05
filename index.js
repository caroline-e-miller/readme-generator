// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');

// Creates writeFile function using promises instead of a callback function
const saveMarkdown = util.promisify(fs.writeFile);

// Creates an array of questions for user input
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
            choices: ['MIT', 'Mozilla', 'Perl', 'None']
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

// Creates a function to initialize app
function init() {
    questions()
        .then((data) => saveMarkdown('customREADME.md', generateMarkdown(data))) // generateMarkdown is a guess, generateHTML doesn't work
        .then(() => console.log('Wrote to customREADME.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();


