const add = function(intOne, intTwo) {
	return intOne += intTwo;
};

const subtract = function(intOne, intTwo) {
	return intOne -= intTwo;
};

const sum = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  }
  , 0);
};

const multiply = function(array) {
  return array.reduce(function(a, b) {
    return a * b;
  });
};

const power = function(int, sqr) {
  let returnVal = 1;
  for (i = 0; i < sqr; i++) {
    returnVal = returnVal * int;
  }
  return returnVal;
};

const factorial = function(int) {
  let fact = 1;
  for (i = 0; i < int; i++) {
    fact = fact * (i + 1);
  }
  return fact;
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
