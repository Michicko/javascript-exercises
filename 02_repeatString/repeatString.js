const repeatString = function(string, num) {
    if(num < 0) return 'ERROR';
    let repeatedStrings = '';
    for(let i = 1; i <= num; i++){
        repeatedStrings += string;
    }
    return repeatedStrings;
};

// Do not edit below this line
module.exports = repeatString;
