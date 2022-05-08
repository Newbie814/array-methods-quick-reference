/*
Create a function that can be used to check for and return a user object from the objs array. The function will accept an ID. It will then use the some method to first check and see if the ID exists in the array. If it exists, return the associated object. If it doesn't exist, return false.
*/

let objs = [
  { id: 'LI_34', name: 'Steven', q1: 85, q2: 0 },
  { id: 'WL_100', name: 'Mary', q1: 95, q2: 100 },
  { id: 'LI_25', name: 'Lynette', q1: 45, q2: 50 },
  { id: 'LI_290', name: 'Emily', q1: 65, q2: 30 },
  { id: 'WL_97', name: 'Sarah', q1: 35, q2: 80 },
];
const findUser = function (id) {
  id = id.toUpperCase();
  if (objs.some((obj) => obj.id.toUpperCase() === id)) {
    return objs.find((elem) => elem.id.toUpperCase() === id);
  } else {
    return false;
  }
};

console.log(findUser('LI_34')); // { id: 'LI_34', name: 'Steven', q1: 85, q2: 0 }

/*
This array represents a series of pages in an online course. If the page has been viewed, it records a 1. It the page has not been viewed, it records a 0. Create a function that will check and see if there are any 0s in the array. If there is a 0, retrieve the index of the first 0 and return it; this is the page that will be shown to the user. If there are no zeros, return the index for the last element in the array (the last page).
*/

let stateInfo = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0];

const rightPage = function (pages) {
  if (pages.includes(0)) {
    return pages.indexOf(0);
  } else {
    return pages.length - 1;
  }
};
console.log(rightPage(stateInfo)); // 15
