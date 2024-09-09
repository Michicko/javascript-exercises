const removeFromArray = function(array, ...args) {
    const filteredArray = array.filter((el) => {
        return !args.includes(el);
    })
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
