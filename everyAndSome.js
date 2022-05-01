// every method   predicate function -- returns true or false

let scores = [80, 50, 0, 100, 90, 80, 75];

let results = scores.every(function (element) {
  return element > 0;
});

console.log(results); //false because the array contains a number that is not greater than 0(the condition that was set)

// some method   predicate function -- returns true or false. similar to every, but returns true if at least one element passes the test

let scores2 = [80, 50, 0, 100, 90, 80, 75];

let results2 = scores2.some(function (element) {
  return element === 0;
});

// function returning # of 0s in this array
let scores3 = [80, 50, 0, 100, 90, 80, 75, 0, 0, 5, 65, 93];

let numZeros = scores3.filter((element) => {
  return element === 0;
});

console.log(numZeros.length);

let zeroCt = 0;

scores3.forEach(function (val) {
  if (val === 0) {
    zeroCt++;
  }
});
console.log(zeroCt);

let zeroCt2 = scores3.reduce(function (acc, val) {
  return val === 0 ? acc + 1 : acc;
}, 0);

console.log(zeroCt2);
