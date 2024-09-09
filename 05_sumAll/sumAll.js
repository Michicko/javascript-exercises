const sumAll = function(startInteger, endInteger) {
    if(
        startInteger < 0 || endInteger < 0 ||
        !Number.isInteger(startInteger) || !Number.isInteger(endInteger)
    ) return 'ERROR';
    
    let start = startInteger;
    let end = endInteger;
    let result = 0;

    if(startInteger > endInteger){
        start = endInteger;
        end = startInteger;
    }

    for(let i = start; i <= end; i++){
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
