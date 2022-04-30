// map()
// to create a new array from the existing array

let arr = [3, 15, 25, 6, 8, 12];

// let newArr = arr.map((val, idx, theArray) => {})  second two parameters are optional -- val is variable representing individual element in array, idx is index of element in array, theArray is the original array

let newArr = arr.map((val) => {
  return val * val;
});

console.log(newArr); // [9, 225, 625, 36, 64, 144]

let newArr2 = arr.map((val, idx, theArray) => {
  console.log(val);
  console.log(idx);
  console.log(theArray);
  tracking = val * val;
  console.log(tracking);
  return tracking;
});

// filter()  creates a new array, a subset array of elements filtered out of original array via a test function

let scores = [80, 50, 100, 90, 80, 75];

let passScores = scores.filter((score) => {
  return score >= 70;
});

console.log(passScores);

let failingScores = scores.filter((score) => {
  return score < 70;
}); // [80, 100, 90, 80, 75]

console.log(failingScores); //[50]
