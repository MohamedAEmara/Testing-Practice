function analyzeArray(array) {
    // returns an object of average, min, max, &length of the array
    let len = array.length;
    if(len == 0) {
        return null;
    }
    
    let mn = 100000000;
    let mx = -100000000;
    let sum = 0;
    for(let i=0; i<len; i++) {
        sum += array[i];
        if(array[i] < mn) {
            mn = array[i];
        } 
        if(array[i] > mx) {
            mx = array[i];
        }
    }


    let avg = sum / len;

    let object = {
        average: avg,
        min: mn,
        max: mx,
        length: len
    };


    return object;
}

module.exports = analyzeArray;