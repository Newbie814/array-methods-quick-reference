//indexOf  and lastIndexOf      search for a specific value and return the index of that value. If that value is ot found, returns -1 lastIndexOf starts at right side ==========================================

let students = [
  'Matt',
  'Sandra',
  'Liam',
  'Connor',
  'TT',
  'Lita',
  'Grandpa',
  'Nana',
  'PawPaw',
  'MeMe',
];
let scores = [80, 90, 55, 60, 85, 95, 25];

let numLocation = scores.indexOf(25);
let numLocation2 = scores.indexOf(37);

console.log(numLocation); //6
console.log(numLocation2); // -1 (doesn't exist)

let strLocation = students.indexOf('Lita');
let strLocation2 = students.indexOf('Lit');
let strLocation3 = students.indexOf('lita');

console.log(strLocation); //5
console.log(strLocation2); // -1 (doesn't exist - has to be exact match)
console.log(strLocation3); // -1 (doesn't exist - case doesn't match)

// includes()    returns true or false =================================================================

if (students.includes('Lita')) {
  console.log('Lita is in the array');
} // true so statement is logged

if (students.includes('lita')) {
  console.log('Lita is in the array');
} // false so statement is not logged

// indexOf() and lastIndexOf() and includes() are equivalent to using === match has to match type and value
// no coercion is applied to the values being compared

// find()  is more flexible (==) and returns the value, not the index

let scores2 = ['80', 90, '55', 60, 85, 95, 25, '100'];
let scores3 = ['80', 90, '55', 100, 60, 85, 95, 25, '100'];

let topScore = scores2.find(function (val) {
  return val == 100;
});

console.log(topScore); // '100' returns string value

let topScore2 = scores3.find(function (val) {
  return val == 100;
});

console.log(topScore2); // 100 - number

let users = [
  { name: 'Steve', q1: 45, q2: 85 },
  { name: 'Ignacio', q1: 100, q2: 100 },
  { name: 'Alvin', q1: 95, q2: 100 },
  { name: 'Brianna', q1: 100, q2: 85 },
  { name: 'Andrea', q1: 75, q2: 95 },
];

let topScoreBothTests = users.find((val) => val.q1 == 100 && val.q2 == 100);

console.log(topScoreBothTests); // { name: 'Ignacio', q1: 100, q2: 100 }

//findIndex()  provides flexibility, but returns the index

let topScoreBothTests2 = users.findIndex(
  (val) => val.q1 == 100 && val.q2 == 100
);

let topScore3 = scores3.findIndex(function (val) {
  return val == 100;
}); // identical to above with find replace with findIndex and returning index

console.log(topScoreBothTests2); // 1
console.log(topScore3); // 3
