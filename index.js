const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

//calling the 2 files 
const { askQuestion } = require("./utils/question");
const { generateMarkdown } = require("./utils/generateMarkdown");



// function to write README file
/*async function generateReadme(response) {
    try {
     const readmd = generateMarkdown;
      await  writeFileAsync("Readme.md", readmd);
    }
   catch (err) {
        console.log("Error here");
    }
}*/



// function to initialize program
async function init() {
    try{
    const response = askQuestion();
    console.log(response);
   const readmd = generateMarkdown(response);
   await writeFileAsync("Readme.md", readmd);
   
}
catch(err){
    console.log(err);
}
}

// function call to initialize program
init();

