const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')

const questionBank = require('./lib/QuestionBank')


// Pseudo code

// Actions needed

// Ask them for manager info



async function inquire (role) {
    console.log(role)
    switch (role) {
        case 'Engineer':
            questions = questionBank.engineerQuestions;
            break;
        case 'Intern':
            questions = questionBank.internQuestions;
          break;
        case 'Manager':
            questions = questionBank.managerQuestions;
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
        .prompt(questionBank.nextAction)
        .then((answers) => {
            console.log("Askfornextfunction",answers)
            console.log(answers.nextAction)
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
                    console.log(employees)
                    buildTeam()
        }});
    
}

const buildTeam = () => {};
    // Add Engineer, Add Intern, `Be done` Adding employees

        // IF `Add Engineer` => `Ask for Engineer info`

        // IF `Add Intern` => `Ask for Intern info`

        // If `Be Done` => `build an html page`
        
        
// Use all of the collected employee data to build an html page.



// Class constructor example



// // import/require employee for each sub class
// class Manager extends Employee {
//     constructor(role, phone) {
//       this.role = role
//       this.phone = phone 
//     //   const area = sideA * sideB;
//     //   const perimeter = sideA * 2 + sideB * 2;
  
//       super(name, id, email);
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }
// }


// // Export after constructing the new class/subclass

// const manager = new Manager('manager', '112')
// console.log(manager)