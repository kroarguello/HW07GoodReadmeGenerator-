// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.nameTitle}

  
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
${response.instructions}

## Questions

 Email :${response.email}
 Github : https://github.com/${userId}


`;
}

generateMarkdown();

module.exports = { 
  generateMarkdown
}
