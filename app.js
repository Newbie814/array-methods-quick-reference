// multi dimensional array

//matrix
// 0   0   0   0   0
// 0   1   2   3   4
// 0   2   4   6   8
// 0   3   6   9   12
// 0   4   8   12  16

// let matrixArr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];

let table = [];

for (let i = 0; i < 5; i++) {
  table[i] = [];
}

for (let row = 0; row < 5; row++) {
  for (let col = 0; col < 5; col++) {
    table[row][col] = row * col;
  }
}

console.log(table);

console.log(table[3][2]);
