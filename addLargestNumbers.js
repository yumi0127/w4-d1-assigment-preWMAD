// function will take in an array, and add the two biggest numbers in the array

const addLargestNumbers = function (data) {
  // Put your solution here
  /*
  let num1 = [];
  let num2 = [];
  for (i = 0; i < data.length; i++) {
    num1 = data[i];
    num2 = data[i] + 1;
    if (num1 < num2) {
      num1 = num2;
    }
  }

  return num1 + num2;
  */

  let num1 = data[0];
  let num2 = data[0];

  for (i = 0; i < data.length; i++) {
    if (num1 <= data[i]) {
      num1 = data[i];
    } else {
      num1 = num1;
    }
  }

  for (i = 0; i < data.length; i++) {
    if (num1 > data[i] && num2 <= data[i]) {
      num2 = data[i];
    } else {
      num2 = num2;
    }
  }

  return num1 + num2;
};

console.log(addLargestNumbers([1, 10]));
// should return 11
console.log(addLargestNumbers([1, 2, 3]));
// should return 5
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));
// should return 126
