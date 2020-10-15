const inquirer = require('inquirer');
const fs = require('fs');
const licName = ["Apache",
"Boost",
"BSD",
"GNU",
"MIT"];

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
      type: "list",
      message: "What lincese do you use?",
      name: "license",
      choices: [
        licName[0],
        licName[1],
        licName[2],
        licName[3],
        licName[4]
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

  //  console.log(response);
}
//askQuestion();

module.exports = {
  askQuestion
}
