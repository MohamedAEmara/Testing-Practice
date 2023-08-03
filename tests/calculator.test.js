const calculator = require('../src/calculator');


test('Add two number', () => {
    expect(calculator(1, 3, '+')).toBe(4);
})


test('Subtract two number', () => {
    expect(calculator(1, 100, '-')).toBe(-99);
})


test('Add non numeric values', () => {
    expect(calculator('a', 1, '+')).toBe("Please enter the two numbers and the operator");
})


test('Add numeric values as strings', () => {
    expect(calculator('12', '44', '+')).toBe(56);
})