const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js')


// array of questions for user
const promptQuestions = () => {
    
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
            message: 'Add instructions for installation'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for using your application'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any third party assets, etc.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Add instructions for testing'
        },
        {
            type: 'input',
            name: 'contribute',
            message:'If there were any collaborators for this project add their names and  GitHub profile links',
          },
        {
            type: 'input',
            name: 'gitName',
            message: 'Enter your Github username'
        },
        {
            type: 'input',
            name: 'gitLink',
            message: 'Add the link to your Github profile'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select a license from the list below',
            choices: ['MIT', 'Apache 2.0', 'ISC', 'Mozilla Public license', 'IBM Public license', 'Artistic license 2.0'],
            
        }
    ]);  
}



promptQuestions()
    .then(projectData => {
        const pageMD = generatePage(projectData);
       // console.log(pageMD)
        writeToFile('readme.md', pageMD);

        
    });

// function to write README file
   function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

        console.log('Readme complete! Please see readme.md')
    });
 }

// // function to initialize program
 function init() {}

// function call to initialize program
 init();
