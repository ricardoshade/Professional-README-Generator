// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Describe the project',
        name: 'projectDescription',
    },
    {
        type: 'input',
        message: 'Installation instructions',
        name: 'installationInstructions',
    },
    {
        type: 'input',
        message: 'What will this project be used for?',
        name: 'projectUse',
    },
    {
        type: 'input',
        message: 'How to contribute to the project',
        name: 'howToContribute',
    },
    {
        type: 'input',
        message: 'Instructions for testing',
        name: 'testingInstructions',
    },
    {
        type: 'list',
        message: 'Choose the type of license needed for this project',
        name: 'licenseType',
        choices: 
            [
                'Academic Free License v3.0', 
                'Apache license 2.0', 
                'Artistic license 2.0',
                'Boost Software License 1.0',
                'Microsoft Public License',
                'MIT',
                'Mozilla Public License 2.0',
                'Open Software License 3.0',
                'PostgreSQL License',
            ],
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'gitHubUsername'
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'emailAddress'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    // {
    //     if(err) {
    //         console.log(err)
    //     } else {
    //         console.log('Success')
    //     }

    //     <condition> ? <if true> : <if false> 
    // }
      );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) => {
    console.log(response)
    const template = generateMarkdown(response)
    

    //How do I create links using table of contents?
    
    
    writeToFile("README.md", template)
  });
}

// Function call to initialize app
init();
