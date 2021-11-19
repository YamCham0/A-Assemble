
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


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
        // createFile();
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
    let engineer = new Engineer(answers.eName, answers.eId, answers.email, answers.gitHub);
    eTeam.push(engineer);
    userChoices();
    })
};


function internPrompt () {
    inquirer
.prompt(internsData)
.then((answers) => {
    console.log(answers);
    let intern = new Intern(answers.iName, answers.iId, answers.email, answers.school);
    eTeam.push(intern);
    userChoices();
    })
};

function init() {
inquirer
.prompt(managerData)
.then((answers) => {
    console.log(answers);
    let manager = new Manager(answers.mName, answers.mId, answers.email, answers.oNumber); 
    eTeam.push(manager);
    userChoices();
    })

};
// 3 separate fuctions to return 3 Strings
// generatemanager card, index0
// generate engineer and intern





function generateHTML(data, name, id, email, github, school, oNumber) {

    return ` 
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
    </ul>
</div>

</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html>
    
    `
};




// Start
init();

function createFile (fileName, data) {

    fs.writeFile(fileName, `${data}`, (err) => {
    err ? console.log(err) : console.log("It's Alive!!!")
    })
};