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

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the intern's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your intern's School?",
        name: "school"
    }
]

const nextAction = [{
    type: "list",
    message: "What would you like to do next?",
    choices: ["Add an Engineer to my team.","Add an Intern to my team.","Finish building my team."],
    name: "nextAction"
}]

const questionBank = {
    nextAction: nextAction,
    internQuestions: internQuestions,
    engineerQuestions: engineerQuestions,
    managerQuestions: managerQuestions
}

module.exports = questionBank;