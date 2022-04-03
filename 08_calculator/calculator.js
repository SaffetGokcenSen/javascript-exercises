const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(addends) {
  return addends.reduce((current, next) => current + next, 0) 
};

const multiply = function(multiplicands) {
  if (multiplicands.length === 0) {
    return null;
  }
  else {
    return multiplicands.reduce((current, next) => current * next, 1);
  }
};

const power = function(base, power) {
  if ((base === 0) && (power === 0)) {
    return undefined;
  }
  else if (power === 0) {
    return 1;
  }
  else {
    let result = 1;
    for (let i = 1; i <= power; ++i) {
      result *= base;
    }
    return result;
  }
};

const factorial = function(n) {
  if ((n === 0) || (n === 1)) {
    return 1;
  }
  else {
    let result = 1;
    for (let i = 1; i <= n; ++i) {
      result *= i;
    }
    return result;
  }
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
