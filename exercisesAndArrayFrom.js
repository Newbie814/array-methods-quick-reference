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

// exercise :

let quote =
  "Compromise where you can. Where you can’t, don’t. Even if everyone is telling you that something wrong is something right. Even if the whole world is telling you to move, it is your duty to plant yourself like a tree, look them in the eye, and say, ‘No, you move.'";

let quoteArr = quote
  .split(' ')
  .filter((word) => {
    return !/\ba\b|\ban\b|\bthe\b/i.test(word);
  })
  .join(' ');
console.log(quoteArr);

// wihth Array.from() you can pass in a callback function to act on elements as they are being passed into the new array

nums = new Set([1, 2, '3', 4, '5']);

numArray = Array.from(nums);

numArray2 = Array.from(nums, (val) => {
  if (typeof val === 'string') {
    return Number(val);
  } else {
    return val;
  }
});

console.log(nums);
console.log(numArray);
console.log(numArray2);
