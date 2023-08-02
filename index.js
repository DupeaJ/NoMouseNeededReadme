const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = ({ ProjectName, Description, Username, license, steps }) =>

`# ${ProjectName}
## Description
${Description}
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

steps required
${steps}

## Usage

## Credits

## License
refer to repo for licenses
license is a ${license} license.

## Badges
![badge](https://img.shields.io/badge/License-${license}-blue.svg)

## Features

## How to Contribute

## Tests
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
            choices: ["MIT", "MPL", "ISC","IBM"],
        },
        {
        type: "input",
        message: "what are the steps to install your project?",
        name: "steps",
        }
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
