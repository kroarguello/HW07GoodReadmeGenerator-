const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

//calling the 2 files 
//const { askQuestion } = require("./utils/question");
const { generateMarkdown } = require("./utils/generateMarkdown");



 function askQuestion() {

    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your Project?",
            name: "nameTitle"
        },
        {
            type: "input",
            message: "Enter a Description",
            name: "description"
        },
        {
            type: "input",
            message: "Instruction for installation",
            name: "installation"
        },
        {
            type: "input",
            message: "Informacion about usage",
            name: "usage"
        },
        {
            type: "checkbox",
            message: "What lincese do you use?",
            name: "license",
            choices: [
                "ISC",
                "one more"
            ]

        },
        {
            type: "input",
            message: "Contributing guideline",
            name: "contribution"
        },
        {
            type: "input",
            message: "Test instructions",
            name: "instructions"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "Github userId",
            name: "useId"
        }
    ]);
     console.log(response);
}
//askQuestion();





// function to initialize program
/*function init() {
    askQuestion()
   .then(function(response){
       const redmd = generateMarkdown(response);
       return writeFileAsync("Readme.md",redmd);
   })
  .catch(function(err) {
    console.log(err);
  });

}
*/
async function init() {
    
   try{
       const response = await askQuestion()
       const redmd = generateMarkdown(response);
       return writeFileAsync("Readme.md",redmd);
    }
  catch (err) {
    console.log(err);
  };

}


// function call to initialize program
init();
