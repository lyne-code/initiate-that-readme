// need the const fs variable here
const fs = require("fs");

// need inquirer variable here
const inquirer = require("inquirer");

// need a markdown js file here
const generateMarkdown = require("./utils/generateMarkdown")

// require fs npm

// array of questions for user
const questions = [
   
    {
        type: "input",
        message: "What is your project title?",
        name: "Title"
    },
    {
        type: "input",
        message: "Please enter a description of your project:",
        name: "Description"
    },
   // Table of Contents, adding this in the markdown.js
    {
        type: "input",
        message: "What are the steps required to install your program?",
        name: "Installation"
    },
    {
        type: "input",
        message: "Please provide the usage instructions:",
        name: "Usage"
    },
    {
        type: "input",
        message:  "Which license are you using for this project?",
        name: "License",
    },
    {
        type: "input",
        message: "How can users contribute to this project?",
        name: "Contributing"
    },
    {
        type: "input",
        message: "Please provide the test instructions:",
        name: "Tests"
    },

    // QUESTIONS section -- github username
    {
        type: "input",
        message: "What is your Github username?",
        name: "userName"
    },
    // QUESTIONS section -- email address
    {
        type: "input",
        message: "What is your Github email address?",
        name: "Questions"
    },
    
   
];

// function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, generateMarkdown(data), function (err) {
       if(err) {
           return console.log(err);
       }
   });
}

// function to initialize program
function init() {
// ask user questions about project
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(JSON.stringify(answers, null, " "));
            answers.getLicense = getLicense(answers.license);
            // save string to a .md file
            writeToFile("README.md", answers);
        })
    //console.log("After questions!")
    
    //fs.appendFile()
}

// function call to initialize program
init();
