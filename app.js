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
scores = [80, 90, 55, 60, 85, 95, 25];

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

// find()
