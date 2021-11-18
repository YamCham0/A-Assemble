
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');


const eTeam =[]
const managerData = [
    {
        name: "mName",
        type: "input",
        message: "What's your manager name?"
    },
    {
        name: "mId",
        type: "input",
        message: "What's your manager employee ID?"
    },
    {
        name: "email",
        type: "input",
        message: "What's your manager email address?"
    },
    {
        name: "oNumber",
        type: "input",
        message: "What's your manager office number?"
    },

]

const engineersData = [
    {
        name: "eName",
        type: "input",
        message: "What's your engineer name?"
    },
    {
        name: "eId",
        type: "input",
        message: "What's your engineer employee ID?"
    },
    {
        name: "email",
        type: "input",
        message: "What's your enegineer email address?"
    },
    {
        name: "gitHub",
        type: "input",
        message: "What is the Github profile name?"
    },
]

const internsData = [
    {
        name: "iName",
        type: "input",
        message: "What's your intern name?"
    },
    {
        name: "iId",
        type: "input",
        message: "What's your intern employee ID?"
    },
    {
        name: "email",
        type: "input",
        message: "What's your intern email address?"
    },
    {
        name: "school",
        type: "input",
        message: "What's your intern office number?"
    },
]

const choices = [
    {
        name: "ques1",
        type: "list",
        message: "Do you want an engineer or an intern to join your team?",
        choices: ["engineer", "intern", "I'm done"]
    },
]







// const validation = async (input) => {
//     if (input !== 'y' || input !== 'n') {
//     return 'Incorrect asnwer';
//     }
//     return true;
// };
// const answer = await inquirer.prompt({
//     name: 'answer',
//     message: 'are you sure?',
//     type: 'input',
//     validate: validation
// });




// function writeToFile (fileName, data) {
//     fs.writeFile(fileName, `${data}`, (err) => {
//     err ? console.log(err) : console.log("It's Alive!!!")
// })
// };

function userChoices () {
    inquirer
.prompt(choices)
.then((answers) => {
    console.log(answers);
    if (answers.ques1 === "engineer"){
        engineersPrompt ();
    }else if (answers.ques1 === "intern"){
        internPrompt ();
    }else{
        console.log("You're done!")
        generateHTML();
    }
    })
};


// {
//     name: "ques1",
//     type: "list",
//     message: "Do you want an engineer or an intern to join your team?",
//     choices: ["engineer", "intern", "I'm done"]
// },
function engineersPrompt () {
    inquirer
.prompt(engineersData)
.then((answers) => {
    console.log(answers);
    eTeam.push(answers);
    userChoices();
    })
};


function internPrompt () {
    inquirer
.prompt(internsData)
.then((answers) => {
    console.log(answers);
    eTeam.push(answers);
    userChoices();
    })
};

function init() {
inquirer
.prompt(managerData)
.then((answers) => {
    console.log(answers);
    eTeam.push(answers);
    userChoices();
    })

};

function generateHTML(data) {

    return ` 
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${data.mName}</h5>
        <p class="card-text"></p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.mId}</li>
        <li class="list-group-item">${data.e}</li>
        <li class="list-group-item">A third item</li>
    </ul>
</div>
    `
};


init();

