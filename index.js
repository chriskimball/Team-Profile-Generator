const inquirer = require('inquirer')

/* prompt Please build your team
ONE PROMPT 
    [
    Q1 What is the team Manager's name?
    What is the team manager's id?
    What is the team manager's email?
    What is the team manager's office number?
    ]

ANOTHER PROMPT (What type of team member would you like to add?)
    * Engineer
    * Intern
    I dont want to add any more team members

    [
    What is your engineer's name?
    What is the engineer's id?
    What is the engineer's email?
    What is the engineer's github profile?
    ]

    [
    What is your intern's name?
    What is your intern's id?
    What is your intern's email?
    What is your intern's School?
    ]
*/

const employees = [];


const managerQuestions = [
    {
        type: "input",
        message: "What is the team Manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the team manager's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "phone"
    }
]



const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the engineer's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the engineer's github profile?",
        name: "github"
    }
]

const internQuestion = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the engineer's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your intern's School?",
        name: "school"
    }
]



// Pseudo code

// Actions needed

// Ask them for manager info



async function inquire (role) {
    switch (role) {
        case 'Engineer':
            questions = engineerQuestions;
            break;
        case 'Intern':
            questions = engineerQuestions;
          break;
        case 'Manager':
            questions = managerQuestions;
    const answers = await
    // Prompt the user for the data
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers)
            // THEN create and store an object for the Manager
            // employees.push(new Manager ( /* pass in answer data from inquirer*/ ));
            // THEN `Ask what they would like to do next`
            askForNextAction();
        })
};



async function askForNextAction(role) {
    
    inquirer
        .prompt(questions)
        .then((answers) => {
            switch (role) {
                case 'Engineer':
                    questions = engineerQuestions;
                    break;
                case 'Intern':
                    questions = engineerQuestions;
                  break;
                case 'Manager':
                    questions = managerQuestions;
            console.log(answers)
            // THEN create and store an object for the Manager
            // employees.push(new Manager ( /* pass in answer data from inquirer*/ ));
            // THEN `Ask what they would like to do next`
            askForNextAction();
        })
    
    inquire(questions)
}

const init = (role) => inquire('Manager');

init()


// Ask them for engineer info

    // Prompt the user for the data

        // THEN create and store an object for the Engineer

        // THEN `Ask what they would like to do next`

// Ask them for intern info

// Ask what they would like to do next?

    // Add Engineer, Add Intern, `Be done` Adding employees

        // IF `Add Engineer` => `Ask for Engineer info`

        // IF `Add Intern` => `Ask for Intern info`

        // If `Be Done` => `build an html page`
        
        
// Use all of the collected employee data to build an html page.



// Class constructor example

// class Employee {
//     constructor (name, id, email) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }

//     getName () {
//         return this.name;
//     }

//     getId () {
//         return this.id
//     }

//     getEmail () {
//         return this.email
//     }

//     getRole () {
//         return `Employee`
//     }
// }

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

