// function to generate markdown for README
function generateMarkdown(response, badgeL) {
  return `# ${response.nameTitle}
${badgeL}
  
## Description

${response.description}


## Table of Contents
    
  * [Installation](#instalation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#test)
  * [Questions](#questions)

## Instalation

${response.installation}


## Usage

${response.usage}

## License

${response.license}
 



## Contributing

${response.contribution}

## Test
${response.instructions} \n


![Alt text](../img/runindexjs.png?raw=true ) 

![Alt text](../img/questions.png?raw=true ) 



![Alt text](../img/viewReadme1.png?raw=true) 

![Alt text](../img/Readme2.png?raw=true) 

## Questions

 Email :${response.email}   \n 
 Github : https://github.com/${response.useId}


`;
}


module.exports = {
  generateMarkdown
}
