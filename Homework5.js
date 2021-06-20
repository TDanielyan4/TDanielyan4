// Task 1
let odd = [];
let even = [];
function split(digits) {
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] % 2 === 0) {
      even.push(digits[i]);
    } else {
      odd.push(digits[i]);
    }
  }
}
console.log(split(['insert digits']))

// Task 2
