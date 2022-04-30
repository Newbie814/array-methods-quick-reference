// reduce() and reduceRight()  used to combine all the elements in an array into a single value. reduce starts at start of array, reduceright at end of array

// takes 2 arguments, the first is a function that determines how the values are processed(combining two elements at a time - the result of which is passed back into next iteration as accumulator value), the second is the initial value of the accumulator

let scores = [80, 50, 0, 100, 90, 80, 75];

// let storageVariable = arrayName.reduce(function(accumulator, currentValue, currentIndex, array), initialValue )

let sum = scores.reduce(function (accumulator, currentValue) {
  //accumulator is the sums up to this point.
  return accumulator + currentValue; //currentValue is the current element in the array
}, 0);

console.log(sum);

let objs = [{ firstName: 'Sandra' }, { lastName: 'Scheff' }, { score: 93 }];

let combinedObj = objs.reduce(function (acc, val) {
  return Object.assign(acc, val);
}, {});

console.log(combinedObj);
