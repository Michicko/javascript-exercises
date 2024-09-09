const reverseString = function(string) {
    const reversedArrayString = string.split('').reverse();
    const reversedString = reversedArrayString.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
