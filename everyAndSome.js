// every() method   predicate function -- returns true or false

let scores = [80, 50, 0, 100, 90, 80, 75];

let results = scores.every(function (element) {
  return element > 0;
});

console.log(results); //false because the array contains a number that is not greater than 0(the condition that was set)

// some() method   predicate function -- returns true or false. similar to every, but returns true if at least one element passes the test

let scores2 = [80, 50, 0, 100, 90, 80, 75];

let results2 = scores2.some(function (element) {
  return element === 0;
});
