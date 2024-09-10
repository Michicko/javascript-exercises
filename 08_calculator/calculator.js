const add = function(...args) {
	const total = args.reduce((acc, current) => acc + current);
  return total;
};

const subtract = function(...args) {
	const total = args.reduce((acc, current) => acc - current);
  return total;
};

const sum = function(array) {
	let total = 0;
  for(let i = 0; i < array.length; i++){
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
	let total = 1;
  for(let i = 0; i < array.length; i++){
    total *= array[i];
  }
  return total;
};

const power = function(base, power) {
	let result = 1;
  for(let i = 1; i <= power; i++){
    result *= base;
  }
  return result;
};

const factorial = function(factor) {
	let total = 1;
  for(let i = factor; i >= 1; i--){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
