const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = ({
    ProjectName,
    Description,
    Username,
    license,
    steps,
    Usage,
    Contributing,
    Tests,
    Email,
    Credits,
    Features,
}) =>
    `# ${ProjectName}
## Description
${Description}
## Table of Contents

- [Installation](##installation)
- [Usage](##usage)
- [Credits](##credits)
- [License](##license)

## Installation

steps required
${steps}

## Usage
${Usage}

## Credits
${Credits}

## License
refer to repo for licenses
license is a ${license} license.

## Badges
![badge](https://img.shields.io/badge/License-${license}-blue.svg)

## Features
${Features}

## How to Contribute
${Contributing}

## Tests
${Tests}

## Questions
reach my git hub profile at (https://github.com/${Username})
If you have additional questions you can reach me at ${Email}
    `;

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "ProjectName",
        },
        {
            type: "input",
            message: "whats a short description of your project",
            name: "Description",
        },
        {
            type: "input",
            message: "What is your Github user name?",
            name: "Username",
        },
        {
            type: "list",
            message: "what license is your project",
            name: "license",
            choices: ["MIT", "MPL", "ISC", "IBM"],
        },
        {
            type: "input",
            message: "what are the steps to install your project?",
            name: "steps",
        },
        {
            type: "input",
            message: "how can your project be useful?",
            name: "Usage",
        },
        {
            type: "input",
            message: "How can people contribute",
            name: "Contributing",
        },
        {
            type: "input",
            message: "what are the steps to install your project?",
            name: "Tests",
        },
        {
            type: "input",
            message: "how do you want people to reach you about issues(email)",
            name: "Email",
        },
        {
            type: "input",
            message: "what special credits do you want to give",
            name: "Credits",
        },
        {
            type: "input",
            message: "what special features does your project have",
            name: "Features",
        },
    ])
    .then((answers) => {
        const readmePage = generateREADME(answers);
        fs.writeFile("README.md", readmePage, (err) =>
            err
                ? console.log(err)
                : console.log("Successfully created READEME!")
        );
    });

//const fileName = "README.md"
// function writeFile(fileName, data) {
//         console.log(fileName)
//         console.log(data)
//         if (err) {
//             return console.log(err)
//         } else {
//             console.log("success")
//         }
//     })
// }

// function run() {
//     inquirer.prompt(questions)
//         .then(function (data) {
//             writeFile("README.md", generateHTML(data));
//             console.log(data)
//         })
// }

// run();
