// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Project Title 

## Description
```
description
```

## Table of Contents
    
  * [Installation](#instalation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#test)
  * [Questions](#questions)

## Instalation
```
Inatlation
```

## Usage
```
usage
```

## License

```
License
```

## Contributing
```
```

## Test
```
```
## Questions
```
 Email : 
 Github : https://github.com/userName
````

`;
}

module.exports = generateMarkdown;
