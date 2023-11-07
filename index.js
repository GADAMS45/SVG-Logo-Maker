const inquirer = require("inquirer");
const fs = require("fs")

inquirer
  .prompt([
    {
        type: "input",
        name: "text",
        message: "What is the 3 characters"
    },
    {
        type: "input",
        name: "textColor",
        message: "What is the text color"
    },
    {
        type: "list",
        name: "shape",
        message: "What is the shape?",
        choices: [
            "triangle",
            "circle",
            "square"
        ]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What is the shape color?"
    }
  ])
  .then((answers) => {
    
    

    if(answers.shape=="circle"){
        let template = `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

         <circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

    </svg>
    `

    fs.writeFile("./examples/logo.svg", template, function() {
        
    })
    console.log("SVG has been generated!") 
    }
    

    if(answers.shape=="triangle"){

     

     let template = `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <polygon points= "150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>

    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

     </svg>`
    

    fs.writeFile("./examples/logo.svg", template, function() {
         
     })
     console.log("SVG has been generated!") 
    }

    if(answers.shape=="square"){
        
let template=`
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <rect x="80" y="40"  width="100" height="100" fill="${answers.shapeColor}"/>

   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

</svg>`
 fs.writeFile("./examples/logo.svg", template, function() {
    
 })
 console.log("SVG has been generated!")
    }
    









})



  


//   "What is the 3 characters",
//   "What is the text color",
//   "What is the shape",
//   "What is shape color"