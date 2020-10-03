
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
   ${getBadge(data.license)}
   
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

   ## Contributors
  ${data.contribute}
   
   ## License
  ${data.license}
   
   
   ---
   
   🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
   
   ## Badges
   
   ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
   
   Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
   
   
   ## Contributing
   
   If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.
   
   ## Tests
   
   Go the extra mile and write tests for your application. Then provide examples on how to run them.
   
 `;
}


 module.exports = generateMarkdown;  
 
