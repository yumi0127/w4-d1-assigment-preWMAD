// Create a function that takes in an array of numbers
// and returns the sum of its cubes.

const sumOfCubes = function (arr) {
  let num = 0;
  for (i = 0; i < arr.length; i++) {
    num = num + arr[i] * arr[i] * arr[i];
  }
  return num;
};

console.log(sumOfCubes([3, 4, 5]));
// should return 216
console.log(sumOfCubes([2]));
// should return 8
console.log(sumOfCubes([]));
// should return 0
