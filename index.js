

const fs = require('fs');
const askQuestion = require("./utils/question");
const generateMarkdown = require("./utils/generateMarkdown");

// function to write README file
writeFileAsync('Readme.md', generateMarkdown(response));



// function to initialize program
function init() {
   askQuestion;
   
}

// function call to initialize program
init();
