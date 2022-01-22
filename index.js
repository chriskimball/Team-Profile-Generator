// Required modules, npm packages, and JS files.
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const questionBank = require('./src/QuestionBank');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');

// Deconstructing the questionBank object into each array of questions for inquirer.
const {nextAction, internQuestions, engineerQuestions, managerQuestions} = questionBank;

// Employees array to contain employees we add to the team.
const employees = [];

// Constructing the init function to prompt inquirer.
const init = (role) => inquire(role);

/* 
// Constructing promise based async funciton for our inquirer package. 
// Inquirer questions are determined by the role being passed into the inquire funciton.
*/
async function inquire (role) {
    switch (role) {
        case 'Engineer':
            questions = engineerQuestions;
            break;
        case 'Intern':
            questions = internQuestions;
          break;
        case 'Manager':
            questions = managerQuestions;
    };

    const answers = await
    // Prompt the user for the data
    inquirer
        .prompt(questions)
        .then((answers) => {
            buildEmployeeObj(role, answers);
            askForNextAction();
        })
};

// Build employee object function based off the employee role and inquirer answers.
const buildEmployeeObj = (role, answers) => {
    
    // Deconstructing the inquirer answers object into variables.
    const { name, id, email, phone, school, github} = answers;

    // Switch case to build each different employee type based off role.
    switch (role) {
        case 'Engineer':
            employees.push(new Engineer (name, id, email, github));
            break;
        case 'Intern':
            employees.push(new Intern (name, id, email, school));
            break;
        case 'Manager':
            employees.push(new Manager (name, id, email, phone));
    };
};

// Promise based asynchronous function to ask the user what they want to do next after building an employee.
async function askForNextAction() {
    const answers = await
    inquirer
        .prompt(nextAction)
        .then((answers) => {
            // Switch case to determine next action based off user input.
            switch (answers.nextAction) {
                case 'Add an Engineer to my team.':    
                    role = 'Engineer';
                    inquire(role);
                    break;
                case 'Add an Intern to my team.':
                    role = 'Intern';
                    inquire(role);
                  break;
                case 'Finish building my team.':
                    writeFile(generateHTML(employees));
        }});
    
};

// Write file function which will build an HTML page based off the generated HTML function.
const writeFile = (data) => {
    fs.writeFile(
        "./dist/index.html", // file name
        data, // content to write
        (err) => 
        err ? console.error(err) : console.log('Building HTML page...') //call back function
      );
};

// Calling the init function and passing in the 'Manager' role.
init('Manager');