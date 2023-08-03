const caesarCipher = require('../src/caesarCipher');


test(' reversing number base on key', () => {
    expect(caesarCipher("BOY IS MOVING",2)).toBe("DQA KU OQXKPI");
});

test(' reversing number base on key', () => {
    expect(caesarCipher("a1ab#bc c",1)).toBe("b1bc#cd d");
});


test(' reversing number base on key', () => {
    expect(caesarCipher("aaabbbccc",1)).toBe("bbbcccddd");
});


test(' reversing number base on key', () => {
    expect(caesarCipher("aAabBbzZz",1)).toBe("bBbcCcaAa");
});


test(' reversing number base on key', () => {
    expect(caesarCipher(1 ,2)).toBe("Invalid Input!!");
});


