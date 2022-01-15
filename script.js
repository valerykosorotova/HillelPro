// Name
const userName = prompt("What is your name?")
console.log(userName);

// Year
const userYear = prompt("What is your year of birth?")
console.log(userYear);

// Age
const userAge = 2022-userYear;
alert (userName + userAge);

// Three variable
let a = "1";
let b = "2";
let c = "3";

// Type coercion 
let numberA = Number(a);
let numberB = Number(b);
let numberC = Number(c);

console.log(a,b,c);
console.log(typeof a,typeof b,typeof c);

console.log(numberA,numberB,numberC);
console.log(typeof numberA,typeof numberB,typeof numberC);

// Variables addition 
console.log(numberA+numberB+numberC);

// Even variables devide by 2 exactly (without remainder)
console.log(numberA%2);
console.log(numberB%2);
console.log(numberC%2);

// Arithmetic mean
console.log((numberA+numberB+numberC)/3);


// Split into individual digits 
let number = 76895;
let fifth = number%10;
let fourth = ((number-fifth)/10)%10;
let third = ((((number-fifth)/10)-fourth)/10)%10;
let second = ((((((number-fifth)/10)-fourth)/10)-third)/10)%10;
let first = ((((((((number-fifth)/10)-fourth)/10)-third)/10)-second)/10)%10;
console.log(first, second, third, fourth, fifth)