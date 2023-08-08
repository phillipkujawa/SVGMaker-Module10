const { Triangle, Circle, Square } = require('./shapes');

test('Triangle render with blue color', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toBe('<polygon points="150,18 244,182 56,182" fill="blue" />');
});