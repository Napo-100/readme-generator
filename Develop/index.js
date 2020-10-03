const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js')


// array of questions for user
const promptQuestions = projectData => {
    if (!projectData) {
        projectData = [];
      }
    console.log(`
    ===================
      Create a Readme
    ===================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: projTitleInput => {
                if (projTitleInput) {
                    return true;
                } else {
                    console.log('Please enter a project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions for installation'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for using your application'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'list collaborators, third party assets, etc.'
        },
        {
            type: 'input',
            name: 'license',
            message: 'add a license',
        }
    ])
    .then(readmeData => {
        projectData.push(readmeData);
        console.log(readmeData);
        console.log(projectData)
        return projectData;
    });
}


promptQuestions()
    .then(projectData => {
        const pageMD = generatePage(projectData);

        fs.writeFile('./readme.md', pageMD, err => {
            if (err) throw new Error(err);

            console.log('check out the readme')
        });
    });

// function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
