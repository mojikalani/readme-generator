const inquirer = require("inquirer");
const fs = require("fs");
inquirer.prompt([
    {
        type: "input",
        message: "Please provide a Name for your README file: ",
        name: "readmeName",
    },
    {
        type: "input",
        message: "Please provide a Name for your project: ",
        name: "projectName",
    },
    {
        type: "input",
        message: "Please provide a Description: ",
        name: "description",
    },
    {
        type: "input",
        message: "Please provide Installation Instructions: ",
        name: "installation",
    },
    {
        type: "input",
        message: "Please provide Usage Information: ",
        name: "usage",
    },
    {
        type: "input",
        message: "Please provide Contribution Guidelines: ",
        name: "contribution",
    },
    {
        type: "input",
        message: "Please provide Test Instructions: ",
        name: "instructions",
    },
    {
        type: "list",
        message: "Please choose a license for your application: ",
        name: "license",
        choices: ["Apache", "MIT", "Mozilla", "Open"]
    },
    {
        type: "input",
        message: "Please provide your Github username ",
        name: "github",
    },
    {
        type: "input",
        message: "Please provide your LinkedIn Profile: ",
        name: "linkedin",
    },
    ])
    .then((answers) => {
        const fileName = `README.md`;
        const profileInfo = `
# Project name 
${answers.projectName}

![badge](https:://img.shields.io/badge/license-${answers.license}-brightgreen)

## Description
-${answers.description}

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribution)
- [Tests](#instructions)
- [Questions](#questions)


## Installation Instructions 
-${answers.installation}
## Usage Information 
-${answers.usage}
## Contribution Guidelines
-${answers.contribution}
## Test Instruction
-${answers.instructions}
## Questions
-${answers.github}
-${answers.linkedin}

        `;
        fs.writeFile(fileName, profileInfo, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
    });
