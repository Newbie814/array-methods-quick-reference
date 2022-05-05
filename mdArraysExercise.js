/*
Create an Array of Arrays (multi-dimensional array) that will store a matrix for the product of even numbers up to and including 20. Here is a sample of the numbers the matrix will contain the product for. So in array[0][0] you should have 4 (2 * 2). array[0][1] and [1][0] should contain 8 (2 * 4) and so on.

   2   4   6   8   10   12   14   16   18   20
2
4      
6
8
10
12
14
16
18
20
*/

//Find out what number is in [9][9].
let table = [];
rowNum = 2;
colNum = 2;

for (let i = 0; i < 10; i++) {
  table[i] = []; // creates 10 empty sub-arrays inside table
}

for (let row = 0; row < 10; row++) {
  // outer loop determines the index
  for (let col = 0; col < 10; col++) {
    table[row][col] = rowNum * colNum;
    colNum += 2;
  }
  colNum = 2;
  rowNum += 2;
}

// console.log(table);

// console.log(table[9][9]);

/*
Below are two arrays of strings. Split each string so that individual words are elements in an array. Make sure to flatten each array, and then combine them into a single array with strArray1 coming first. Once that is done, convert the array to a string and display the resulting sentence.
*/

let strArray1 = ['Arrays are important', 'data structures for any', 'language'],
  strArray2 = ['and', 'should be mastered', 'in', 'JavaScript.'];

let split1 = strArray1.flatMap((val) => val.split(' '));
let split2 = strArray2.flatMap((val) => val.split(' '));

let newArray = [...split1, ...split2];

let arrStr = newArray.join(' ');

console.log(arrStr);
