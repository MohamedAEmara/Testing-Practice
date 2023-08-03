const analyzeArray = require('../src/analyzeArray');


test('[0,1,2,3,4] to be', () => {
    const expected = {
        average: 2,
        min: 0,
        max: 4,
        length: 5
    }
    const data = [0,1,2,3,4];
    expect(analyzeArray(data)).toEqual(expected);
});

test('[] to be', () => {
    const data = [];
    expect(analyzeArray(data)).toBeNull();
});

test('[1, 100, 1000, 10000] to be', () => {
    const expected = {
        average: 2775.25,
        min: 1,
        max: 10000,
        length: 4
    }
    const data = [1,100,1000,10000];
    expect(analyzeArray(data)).toEqual(expected);
});