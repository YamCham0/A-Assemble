
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
        name: "office",
        type: "input",
        message: "What's your manager office number?"
    },

]

const engineersData = [
    {
        name: "name",
        type: "input",
        message: "What's your engineer name?"
    },
    {
        name: "id",
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
        name: "name",
        type: "input",
        message: "What's your intern name?"
    },
    {
        name: "id",
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
        imDone();
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
    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
    const engineerPage = generateEngineerPage(engineer);
    fs.appendFile('./dist/index.html', engineerPage,(err) => 
    err ? console.log(err) : console.log('Yay!')
    );
    userChoices();
    })
};

const generateEngineerPage = (engineer) => 
`<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">Engineer:${engineer.name}</div>
  <div class="card-body">
    <h5 class="card-title">Id:${engineer.id}</h5>
    <p class="card-text">Email:<a href="mailto:${engineer.email}"> ${engineer.email}</a></p>
    <p class="card-text">Github:${engineer.github}</p>
  </div>
</div>`



const generateManagerPage = (manager) =>

    ` 
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
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">Manager:${manager.name}</div>
  <div class="card-body">
    <h5 class="card-title">Id:${manager.id}</h5>
    <p class="card-text">Email:<a href="mailto:${manager.email}"> ${manager.email}</a></p>
    <p class="card-text">Office Number:${manager.office}</p>
  </div>
</div>`



function internPrompt () {
    inquirer
.prompt(internsData)
.then((answers) => {
    console.log(answers);
    let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    const interPage = generateInternPage(intern);
    fs.appendFile('./dist/index.html', interPage,(err, results) => 
    err ? console.log(err) : console.log('Yay!')
    );
    userChoices();
    })
};
const generateInternPage = (intern) => 
`<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">Intern:${intern.name}</div>
  <div class="card-body">
    <h5 class="card-title">Id:${intern.id}</h5>
    <p class="card-text">Email:<a href="mailto:${intern.email}"> ${intern.email}</a></p>
    <p class="card-text">School:${intern.school}</p>
  </div>
</div>`

function init() {
inquirer
.prompt(managerData)
.then((answers) => {
    console.log(answers);
    console.log(answers.office);
    let manager = new Manager(answers.mName, answers.mId, answers.email, answers.office);
    console.log(manager.office);
    const managerPage = generateManagerPage(manager);
    fs.writeFile('./dist/index.html', managerPage,(err) => 
    err ? console.log(err) : console.log('Yay!')
    );
    userChoices();
    })
};


// 3 separate fuctions to return 3 Strings
// generatemanager card, index0
// generate engineer and intern
// break html into sections
// Concat html




function imDone(){
    fs.appendFile("./dist/index.html", lastHtml,(err) => 
    err ? console.log(err) : console.log('Yay!')
);
}


const lastHtml =`</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html>
    
    `;








// function generateHTML(data, name, id, email, github, school, oNumber) {

//     const html =
//     // create the card dinamically
// <div class="card" style="width: 18rem;">
//     <div class="card-body">
//         <h5 class="card-title"></h5>
//         <p class="card-text"></p>
//     </div>
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">An item</li>
//         <li class="list-group-item">A second item</li>
//         <li class="list-group-item">A third item</li>
//     </ul>
// </div>

// };




// Start
init();

// function createFile (fileName, data) {
//     fs.writeFile(./ (err) => {
//     err ? console.log(err) : console.log("It's Alive!!!")
//     })
// };