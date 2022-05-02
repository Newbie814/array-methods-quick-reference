// =============================== JOINING ARRAYS ===============================

// join() method
// opposite of split(). Split turns a string into an array of substrings, join turns an array into a string.

let blackSails =
  ' I have one regret. I regret ever coming to this place with the assumption that a reconciliation could be found. That reason, could be a bridge between us. Everyone is a monster to someone. Since you are so convinced that I am yours, I will be it.';

let quoteArr = blackSails.split(' ');
console.log(quoteArr);

let putBack = quoteArr.join(' '); // without the space, the words would be joined together
console.log(putBack);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arrJoined = arr.join();
// console.log(arrJoined); //output: 1,2,3,4,5,6,7,8,9,10

let arrJoined2 = arr.join(' ');
console.log(arrJoined2); //output: 1 2 3 4 5 6 7 8 9 10

// combining arrays together

let array1 = [5, 10, 15, 20, 25];
array2 = [2, 4, 6, 8, 10, 12];
array3 = ['abc', 'def', 'ghi', 'jkl'];

let newArray = [...array1, ...array2]; //spreads values into the new array
console.log(newArray); //[5, 10, 15, 20, 25, 2, 4, 6, 8, 10, 12]

// concat() method  ----- creates new array

let array4 = [5, 10, 15, 20, 25];
array5 = [2, 4, 6, 8, 10, 12];
array6 = ['abc', 'def', 'ghi', 'jkl'];

let concatArray = array5.concat(array4, array6); //concatenates the arrays - method is invoked on array we want to come first
console.log(concatArray); // [2, 4, 6, 8, 10, 12, 5, 10, 15, 20, 25, 'abc', 'def', 'ghi', 'jkl']

let concatArray2 = array5.concat(array4, array6, [
  'matt',
  'sandra',
  'liam',
  'connor',
]); // adds previously undeclared array
console.log(concatArray2);
// output: [2, 4, 6, 8, 10, 12, 5, 10, 15, 20, 25, 'abc', 'def', 'ghi', 'jkl', 'matt', 'sandra', 'liam', 'connor']

//can do the same thing with spread operator, but without brackets
let newArray2 = [...array1, ...array2, 'matt', 'sandra', 'liam', 'connor'];
console.log(newArray2); //[5, 10, 15, 20, 25, 2, 4, 6, 8, 10, 12, 'matt', 'sandra', 'liam', 'connor']

// ==================================== extracting a sub-array

// slice() - extract a portion of an array and returns as a new array

// excepts 2 non-required arguments, first is the starting index, second is the ending index(exclusive)

let array7 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

let sliceArray = array7.slice(0, 5); // extracts indexes 0, 1, 2, 3, 4
console.log(sliceArray); //[5, 10, 15, 20, 25]

let sliceArray2 = array7.slice(6); // at 6(inclusive) and returns everything after
console.log(sliceArray2); //[35, 40, 45, 50]

let sliceArray3 = array7.slice();
console.log(sliceArray3); // returns entire array //[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

//slice has traditionally been used to convert array-like objects into arrays

let test = function () {
  console.log(arguments);
  let argArray = Array.prototype.slice.call(arguments);
  console.log(Array.isArray(argArray)); //true
};
test(1, 2, 3); // returns an array-like object with the passed in arguments as elements

// ============================== flatten an array =============================

let array8 = [
  [5, 10],
  [15, 20],
  [25, 30, 35, 40],
];
