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


![Alt text](utils/img/runindexjs.png?raw=true )   \n 
![Alt text](utils/img/questions.png?raw=true )   \n 
![Alt text](utils/img/viewReadme1.png?raw=true)   \n 
![Alt text](utils/img/Readme2.png?raw=true)   \n 

## Questions

 Email :${response.email}   \n 
 Github : https://github.com/${response.useId}


`;
}


module.exports = {
  generateMarkdown
}
