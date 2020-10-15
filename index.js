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
       const redmd = generateMarkdown(response); 
       return writeFileAsync("Readme.md",redmd); // generating the readme file
    }
  catch (err) {
    console.log(err);
  };

}


// function call to initialize program
init();
