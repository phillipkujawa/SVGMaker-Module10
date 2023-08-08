const { Triangle, Circle, Square } = require('./shapes');

test('Triangle render with blue color', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toBe('<polygon points="150,18 244,182 56,182" fill="blue" />');
});

test('Circle render with red color', () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toBe('<circle cx="150" cy="100" r="90" fill="red" />');
});

test('Square render with green color', () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toBe('<rect x="50" y="50" width="200" height="100" fill="green" />');
});
