const palindromes = function (str) {
    // remove space and comma from string
    const bareStr = str.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase();
    const reseredArrStr = bareStr.split('').reverse();
    const reversedStr = reseredArrStr.join('');
    return bareStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
