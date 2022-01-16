// 1. Two options to find out which number is bigger:

let a = 200;
let b = 120;
let c = a>b;
console.log ("a is bigger -", Boolean(c));

let x = 10;
let y = 120;

if(x>y){
    console.log("x is bigger");
}else{
    console.log("y is bigger");
}

// 2. Is the number even? Two options:

let number = 12334;
let lastDigit = number%10;
if(number % 2 ===0){
    console.log("NUMBER IS EVEN,", "LAST DIGIT = ", lastDigit);
}else{
    console.log("NUMBER IS NOT EVEN,", "LAST DIGIT = ", lastDigit);
}

let secondNumber = 12335;
let secondLastDigit = secondNumber%10;
const check = secondNumber % 2 === 0 ? console.log("NUMBER IS EVEN","LAST DIGIT = ", secondLastDigit) : console.log("NUMBER IS NOT EVEN","LAST DIGIT = ", secondLastDigit);

// 3. Script

let userName = prompt("Ваше имя?");
let userAge = prompt("Ваш возраст?");
let question = confirm("Упортебляете ли Вы алкоголь?");

// if (question === true & userAge >= 40){
//     console.log(userName, "Не злоупотребляйте");
// }
// if (question === true & userAge < 18){
//     console.log(userName, "Ты что?! Маме расскажу!");
// }
// if (question === true & userAge >= 18 & userAge < 40){
//     console.log(userName, "Только водку с пивом не мешай...");
// }
// if (question === false){
//     console.log(userName, "Так держать!");
// }




if (question === true && Number.isNaN(userAge) === false && userAge >= 40){
    console.log(userName, "Не злоупотребляйте");
}
else if (question === true && Number.isNaN(userAge) === false && userAge < 18 && userAge > 0){
    console.log(userName, "Ты что?! Маме расскажу!");
}
else if (question === true && Number.isNaN(userAge) === false && userAge >= 18 || userAge < 40 && userAge > 0){
    console.log(userName, "Только водку с пивом не мешай...");
}
else if (question === false &&Number.isNaN(userAge) === false && userAge > 0){
    console.log(userName, "Так держать!");
}
else{
    console.log("Undefined")
}


// & String(userName) === true
// Number.isNaN(userAge) === false

// if (typeof(userName) !== String || typeof(userAge) !== Number){
//     console.log("Undefined")
// }
// else{
// //     console.log("Undefined")
// // }

// if (question === true & userAge >= 40 & userName === true){
//     console.log(userName, "Не злоупотребляйте")
// }
// if (question === true & userAge < 18 & userName === true){
//     console.log(userName, "Ты что?! Маме расскажу!")
// }
// if (question === true & userAge >= 18 & userAge < 40 & userName === true){
//     console.log(userName, "Только водку с пивом не мешай...")
// }
// if (question === false & userAge === true & userName === true){
//     console.log(userName, "Так держать!")}
// }else{
//     console.log("Undefined")
// }

// && userName === false & userAge === false