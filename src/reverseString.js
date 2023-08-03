function reverseString(string) {
    let numVal = Number(string);
    if(typeof(numVal) === typeof(string)) {
        return "Not a String";
    }
    
    let ret = '';
    let n = string.length;

    for(let i=n-1; i>=0; i--) {
        ret += string.charAt(i);
    }


    return ret;
}


module.exports = reverseString;