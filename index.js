const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const questionBank = require('./lib/QuestionBank');
const generateHTML = require('./lib/generateHTML');
const fs = require('fs');

// Deconstructing the questionBank object into each array of questions for inquirer.
const {nextAction, internQuestions, engineerQuestions, managerQuestions} = questionBank;

const employees = [];

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
    }
    const answers = await
    // Prompt the user for the data
    inquirer
        .prompt(questions)
        .then((answers) => {
            buildEmployeeObj(role, answers);
            askForNextAction();
        })
};

const buildEmployeeObj = (role, answers) => {
    
    const { name, id, email, phone, school, github} = answers;

    switch (role) {
        case 'Engineer':
            employees.push(new Engineer (name, id, email, github));
            break;
        case 'Intern':
            employees.push(new Intern (name, id, email, school));
            break;
        case 'Manager':
            employees.push(new Manager (name, id, email, phone));
    }
}

const init = (role) => inquire(role);

init('Manager')


// Ask them for engineer info

    // Prompt the user for the data

        // THEN create and store an object for the Engineer

        // THEN `Ask what they would like to do next`

// Ask them for intern info


// Ask what they would like to do next?
async function askForNextAction() {
    const answers = await
    inquirer
        .prompt(nextAction)
        .then((answers) => {
            switch (answers.nextAction) {
                case 'Add an Engineer to my team.':    
                    role = 'Engineer';
                    inquire(role)
                    break;
                case 'Add an Intern to my team.':
                    role = 'Intern';
                    inquire(role)
                  break;
                case 'Finish building my team.':
                    writeFile(generateHTML(employees))
        }});
    
}

const writeFile = (data) => {
    fs.writeFile(
        "./dist/index.html", // file name
        data, // content to write
        (err) => 
        err ? console.error(err) : console.log('Building HTML page...') //call back function
      );
}


// const generateHTML = () => {
//     for (employee in employees) console.log(employees[employee].getRole())
    
// };
    // Add Engineer, Add Intern, `Be done` Adding employees

        // IF `Add Engineer` => `Ask for Engineer info`

        // IF `Add Intern` => `Ask for Intern info`

        // If `Be Done` => `build an html page`
        
        
// Use all of the collected employee data to build an html page.
