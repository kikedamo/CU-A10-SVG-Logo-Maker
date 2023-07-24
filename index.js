const inquirer = require('inquirer');
const jest =  require ('jest');
const fs=require("fs/promises");
const SVG = require("./lib/svg");

const Triangle=require("./lib/shapes").Triangle;
const Circle=require("./lib/shapes").Circle;
const Square=require("./lib/shapes").Square;
const criteria=()=>{
    return inquirer.prompt([
        {
            type:"input",
            message:"What 3 characters do you want in your Logo?",
            name:"text",
            validate:(text)=>{
                if (text.length>3) {
                    return "Logo max character length must be 3 characters or less"
                }
                return true;
            }
        },
        {
            type:"list",
            message:"What shape would you like your logo background to be?",
            choices:["Circle", "Square", "Triangle"],
            name:"Shape",
        },
        {
            type:"input",
            message:"What color will the background be?(color name or hex code)",
            name:"BGcolor",
        },
        {
            type:"input",
            message:"What color will the text be?(color name or hex code)",
            name:"TxtColor",
        },
    ])
}

function Create() {
    criteria()
    .then((answers)=>{
        let backgroundShape;
        switch (answers.shape){
            //Triangle Case
            case "Triangle":
                backgroundShape =new Triangle();
            break;
            //Circle Case
            case "Circle":
                backgroundShape =new Circle();
            break;
            //Square Case
            case "Square":
                backgroundShape =new Square();
            break;
        }
        const svg= new SVG();
        backgroundShape.setColor(answers.BGcolor);
        svg.setText(answers.text,answers.TxtColor);
        svg.setShape(backgroundShape);
        return fs.writeFile("Logo.svg",svg.render());
        }
    )
}