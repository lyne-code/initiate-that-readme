const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// require fs npm

// array of questions for user
const questions = [
    {
        message: "What is your Github username?",
        name: "Github"
    },
    {
        message: "What is your email address?",
        name: "email"
    },
    {
        message: "What is your project title?",
        name: "title"
    },
    {
        title: "Description",
        message: "What is your project description?",
        name: "description"
    },
    {
        message: "What are the installation instructions?",
        name: "installation"
    },
    {
        message: "What is the usage information?",
        name: "usage"
    },
    {
        message: "Who are the contributors of this project?",
        name: "contributing"
    },
    {
        message: "Which tests will you run?",
        name: "tests"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return false.writeFileSync(path.join(process.cwd()
}

// function to initialize program
function init() {

    // ask user questions about project
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            const markDown = generateMarkdown(answers);
            console.log(markDown);
        })
    console.log("After questions!")

    
    // save string to a .md file
    writeToFile("README")
    //fs.appendFile()
}

// function call to initialize program
init();
