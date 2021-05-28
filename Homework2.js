// assignment 1
let numberOne = prompt('Print number please')
if(numberOne%2===0){
    alert('even')
}    else {
    alert('odd')
}
// assignment 2
let numberOne = prompt('Please insert your number');
let numberTwo = numberOne%10;
let numberThree = Math.floor(numberOne/10);
if(numberOne%10===0){
    alert(numberOne)
}    else {
    alert(numberTwo.toString() + numberThree)
}
// assignment 3
let numberOne = prompt('Insert number'),
    numberTwo = prompt('Insert number'),
    numberThree = prompt('Insert number'),
    numberFour = prompt('Insert number'),
    numberFive = prompt('Insert number');
alert((+numberOne + +numberTwo + +numberThree + +numberFour + +numberFive) / 5)
// assignment 4
let numberA = prompt('insert number'),
    numberB = prompt('insert number'),
    numberC = prompt('insert number');
if(numberA < numberB && numberB < numberC){
    console.log(numberA, numberB, numberC)
}    else if(numberB < numberA && numberA < numberC){
    console.log(numberB, numberA, numberC)
}    else if(numberC < numberB && numberB < numberA){
    console.log(numberC, numberB, numberA)
}    else if(numberB < numberC && numberC < numberA){
    console.log(numberB, numberC, numberA)
}    else    {
    console.log(numberA, numberC, numberB)
}
// assignment 5
let n = +prompt('insert number');
let j = 0;
let i = 0;
if(n % 0 === 0 && !Math.floor(n / 10)){
    i += 1;
}   
    if(n % 3 === 0 && n % 10 === 1){
    j += 1;
}    