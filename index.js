const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const fs = require('fs');

const colors = ['red', 'green', 'blue', 'yellow', 'black', 'white', 'purple', 'cyan', 'magenta'];

async function main() {
    const answers = await inquirer.prompt([
        { type: 'input', name: 'text', message: 'Enter up to three characters for text:', validate: input => input.length <= 3 },
        { type: 'list', name: 'textColor', message: 'Choose a text color:', choices: colors },
        { type: 'list', name: 'shape', message: 'Choose a shape:', choices: ['circle', 'triangle', 'square'] },
        { type: 'list', name: 'shapeColor', message: 'Choose a shape color:', choices: colors }
    ]);

    let shape;
    switch (answers.shape) {
        case 'circle':
            shape = new Circle(answers.shapeColor);
            break;
        case 'triangle':
            shape = new Triangle(answers.shapeColor);
            break;
        case 'square':
            shape = new Square(answers.shapeColor);
            break;
    }

    const svg = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="105" font-family="Arial" font-size="40" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>
    `;

    fs.writeFileSync('logo.svg', svg);
    console.log("Generated logo.svg");
}

main();
