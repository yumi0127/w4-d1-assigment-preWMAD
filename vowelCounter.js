// write a function that counts the number of vowels in a given string and returns that value
// one potential solution may use the charAt() method, but this isnt the only solution
// you may alsop find the .contains() method useful.
//another useful couple of methods could be .split and .join
const vowelCounter = function (data) {
  // Put your solution here

  let result = 0;
  for (i = 0; i < data.length; i++) {
    if (
      data[i].includes("a") ||
      data[i].includes("e") ||
      data[i].includes("i") ||
      data[i].includes("o") ||
      data[i].includes("u")
    ) {
      result = result + 1;
    } else {
      result = result;
    }
  }
  return result;
};

console.log(vowelCounter("orange"));
// should return 3
console.log(vowelCounter("Cornerstone"));
// should return 4
console.log(vowelCounter("aeiou"));
// should return 5
