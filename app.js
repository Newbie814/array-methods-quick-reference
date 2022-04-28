// majority of these prevent from mutating the original array... they return a new arry or return the result without affecting the original array

//take callback functions as arguments

//forEach()     good replacement for for loop
// can also be used to mutate original array

// for loop example:

let arr = [3, 15, 25, 6, 8, 12];
total = 0;

// for (let val of arr) {
//   total += val;
// }

// same as above, but with forEach(). (val is variable I assigned to represent each element in the array)

arr.forEach((val) => {
  total += val; // same as total = total + val
});

console.log(total); //69

// example of forEach() with mutating original array

let objArr = [
  {
    firstName: 'Matt',
    lastName: 'Woodard',
    score: 69,
    pass: null,
  },
  {
    firstName: 'Sandra',
    lastName: 'Scheff',
    score: 93,
    pass: null,
  },
  {
    firstName: 'Liam',
    lastName: 'Woodard',
    score: 86,
    pass: null,
  },
  {
    firstName: 'Connor',
    lastName: 'Woodard',
    score: 85,
    pass: null,
  },
];

// objArr.forEach(function (student) {
//   if (student.score >= 70) {
//     student.pass = true;
//   } else {
//     student.pass = false;
//   }
// });

objArr.forEach((student) => {
  student.score >= 70 ? (student.pass = true) : (student.pass = false);
});

console.log(objArr);

//output:
// 0: {firstName: 'Matt', lastName: 'Woodard', score: 69, pass: false}
// 1: {firstName: 'Sandra', lastName: 'Scheff', score: 93, pass: true}
// 2: {firstName: 'Liam', lastName: 'Woodard', score: 86, pass: true}
// 3: {firstName: 'Connor', lastName: 'Woodard', score: 85, pass: true}

// callback function in forEach() can have multiple arguments. 1st is variable representing each element in the array, 2nd is index of element in array, 3rd is the original array

let arr2 = [3, 15, 25, 6, 8, 12];
// total2 = 0;

arr2.forEach((val, idx, theArray) => {
  theArray[idx] = val * 2;
});

console.log(arr2);
