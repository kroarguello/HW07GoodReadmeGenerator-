const inquirer = require('inquirer');
const fs = require('fs');

function askQuestion() {

  const response = inquirer.prompt([
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
//  console.log(response);
}
//askQuestion();

module.exports = {
  askQuestion
}
