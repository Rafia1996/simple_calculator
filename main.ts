#! /usr/bin/env node


import inquirer from "inquirer";


const answer = await inquirer.prompt([
    {message : "enter first number" , type: "number", name :"fname" },
    {message : "enter second number" , type: "number", name :"sname" },
    {message : "select one option that you want" , 
    type: "list", name :"operator",
    choices : ["addition", "subtraction", "multiplication" , "division"]  },
]);


if(answer.operator === "addition") {
    console.log(answer.fname + answer.sname);
}
else if(answer.operator === "subtraction"){
    console.log(answer.fname - answer.sname);
}
else if(answer.operator === "multiplication"){
    console.log(answer.fname * answer.sname);
}
else if(answer.operator === "division"){
    console.log(answer.fname / answer.sname);
}
else { 
    console.log("please select valid operator")
}