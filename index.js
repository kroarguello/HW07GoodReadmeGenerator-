const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

//calling the 2 files 
const { askQuestion } = require("./utils/question");
const { generateMarkdown } = require("./utils/generateMarkdown");



async function init() {
    
   try{
       const response = await askQuestion() // prompt the questions
       let badgeL;
       if (response.license === "Apache"){
            
            badgeL = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        }
        if (response.license === "Boost"){
            
             badgeL = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        }
        if (response.license === "BSD"){
            
            badgeL = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        }
        if (response.license === "GNU"){
            
            badgeL = "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";
        }
        if (response.license === "MIT"){
            
            badgeL = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        }
       

       const redmd = generateMarkdown(response, badgeL); 
       return writeFileAsync("Readme.md",redmd); // generating the readme file
    }
  catch (err) {
    console.log(err);
  };

}


// function call to initialize program
init();
