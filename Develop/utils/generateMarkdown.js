
function getBadge (license) {
  if (license == 'MIT' ){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } 
  if (license == 'Apache 2.0' ){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } 
  if (license == 'ISC' ){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } 
  if (license == 'Mozilla Public license' ){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } 
  if (license == 'IBM Public license' ){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  } 
  if (license == 'Artistic license 2.0' ){
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
  } 

  
}
//function to generate markdown for README
function generateMarkdown(data) {
  
 //console.log(data)
   return `
   # ${data.title}
   
   
   ## Description 
   ${data.description}

   ## Table of Contents
  * [Installation](#installation)
    
  * [Usage](#usage)

  * [Testing](#test)

  * [Credits](#credits)

  * [Licenses](#license)
      
   
   ## Installation
      ${data.installation}

   ## Usage 
  ${data.usage}

   ## Credits  
  ${data.credits} 
   
   ## License
   ${getBadge(data.license)}
         
   
   ## Contributing
  ${data.contributing}
      
   ## Tests
  ${data.test}
   
   ## Contact
  #### <a href="https://www.github.com/${data.gitName}">GitHub</a>
  #### ${data.email}
   
 `;
}


 module.exports = generateMarkdown;  
 
