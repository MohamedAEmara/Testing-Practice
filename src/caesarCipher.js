function caesarCipher(str, shift) {
    if(typeof(str) != 'string' || isNaN(shift)) {
        return ('Invalid Input!!');
    } 

    let res = '';
    let n = str.length;
    for(let i=0; i<n; i++) {
        // check upperCase
        if(str[i] >= 'A' && str[i] <= 'Z') {
            // Take the modulous of shift
            let tmp = Math.floor(shift/26);
            shift -= tmp * 26;

            let newAsccii = str.charCodeAt(i) + shift;
            let newChar = String.fromCharCode(newAsccii);
            if(String.fromCharCode(newAsccii) > 'Z') {
                let x = newAsccii - 'Z'.charCodeAt(0);
                x += 'A'.charCodeAt(0) - 1;
                newChar = String.fromCharCode(x);
            }
            
            res += newChar;
        } else if(str[i] >= 'a' && str[i] <= 'z') {
            // Take the modulous of shift
            let tmp = Math.floor(shift/26);
            shift -= tmp * 26;

            let newAsccii = str.charCodeAt(i) + shift;
            let newChar = String.fromCharCode(newAsccii);
            if(String.fromCharCode(newAsccii) > 'z') {
                let x = newAsccii - 'z'.charCodeAt(0);
                x += 'a'.charCodeAt(0) - 1;
                newChar = String.fromCharCode(x);
            }
            
            res += newChar;
        }
        else {
            res += str[i];
        }
    }

    return res;
}


module.exports = caesarCipher;