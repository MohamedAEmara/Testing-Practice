function capitalize(word) {
    const n = word.length;
    let capitalized = "";
    for(let i=0; i<n; i++) {
        if(word[i] >= 'a' && word[i] <= 'z') {
            let tmp = word.charCodeAt(i);
            tmp -= 32;
            let charrr = String.fromCharCode(tmp);
            capitalized = capitalized + charrr;
        } else {
            capitalized += word.charAt(i);
        }
    }
    return capitalized;
}


module.exports = capitalize;