function calculator(a, b, op) {
    if(isNaN(a) || isNaN(b) || op === null || op === undefined) {
        return "Please enter the two numbers and the operator";
    }
    if(op === '+') {
        return Number(a) + Number(b);
    }
    if(op === '-') {
        return Number(a) - Number(b);
    }
    if(op === '*') {
        return Number(a) * Number(b);
    }
    if(op === '/') {
        return Number(a) / Number(b);
    }
    
}

module.exports = calculator;