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
    `<h1 align="center">${ProjectName}</h1>
    ![badge](https://img.shields.io/badge/License-${license}-blue.svg)
<h2 aligh="center">Description</h2>
${Description}
## Table of Contents

- [Installation](##installation)
- [Usage](##usage)
- [Credits](##credits)
- [License](##license)

<h2 aligh="center"> Installation</h2>

steps required
${steps}

<h2 aligh="center">Photos</h2>
<img src="assets/photos/.PNG" alt="screenshot" width="75%" height="75%">

<h2 aligh="center">Usage</h2>
${Usage}

<h2 aligh="center">Credits</h2>
${Credits}

<h2 aligh="center">License</h2>
refer to repo for licenses
license is a ${license} license.

<h2 aligh="center">Badges</h2>
![badge](https://img.shields.io/badge/License-${license}-blue.svg)

<h2 aligh="center">Features</h2>
${Features}

<h2 aligh="center"> How to Contribute</h2>
${Contributing}

<h2 aligh="center">Tests</h2>
${Tests}

<h2 aligh="center">Questions</h2>
reach my git hub profile at (https://github.com/${Username})
<br></br>
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
