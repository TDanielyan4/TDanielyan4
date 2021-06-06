// Assignment 1
let userNumber = prompt('insert number');
Math.round(userNumber / 50) * 50;
// Assignment 2
let a = prompt('insert a'), 
    b = prompt('insert b'),
    c = prompt('insert c');
let product = a/(1/b)/(1/c)
if (product < 0 ) {
    console.log('-')    
}
else if (product == 0){
    console.log('unsinged')
}
else {
    console.log('+')
}
// Assignment 3
let myNumber = prompt('Enter a nubmer')
let stringNumber = String(myNumber)
let myDigit = prompt('Enter a digit')

if (stringNumber.match(myDigit)) {
    console.log('Yes');
}
else {
    console.log('No')
}
// Assignment 5
function testPrimeNumber(num)
{
  if (num===1)
  {
    return false;
  }
  else if(num === 2)
  {
    return true;
  }else
  {
    for(let x = 2; x < num; x++)
    {
      if(num % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
// console.log(testPrimeNumber(____))