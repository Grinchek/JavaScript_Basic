//alert("Hello java script");
// console.log("Hello js from console");

// let number = 100;
// let email = "ivan@gmail.com";
// let flag = true;

// console.log(number);
// console.log(typeof (number));
// console.log(`Number = ${number}, type: ${typeof (number)}`);
// console.log(`Number = ${email}, type: ${typeof (email)}`);
// console.log(`Number = ${flag}, type: ${typeof (flag)}`);
////////////////// #1 ///////////////////////////
// let num = prompt("Enter number:");
// let result = num * num;
// alert(`Result = ${result}`);
//===============================================
////////////////// #2 ///////////////////////////
// let num1 = prompt("Enter number 1:");
// let num2 = prompt("Enter number: 2");
// let sum = +num1 + +num2;
// let result2 = sum / 2;
// alert(`Result = ${result2}`);
//===============================================
////////////////// #3 ///////////////////////////
// let side = prompt("Enter side length (sm):");
// let area = side * side;
// alert(`Sqere area = ${area} sm^2`);

//===============================================
////////////////// #4 ///////////////////////////
// let kilometers = prompt("Enter amount of kilometers:");
// let miles = kilometers * 0.621371;
// alert(`${kilometers} kilometers = ${miles} miles`);
//===============================================
////////////////// #5 ///////////////////////////
// let num1 = prompt("Enter number 1:");
// let num2 = prompt("Enter number: 2");
// alert(`${num1} + ${num2} = ${+num1 + +num2}`);
// alert(`${num1} - ${num2} = ${num1 - num2}`);
// alert(`${num1} * ${num2} = ${num1 * num2}`);
// alert(`${num1} / ${num2} = ${num1 / num2}`);

//===============================================
////////////////// #6 ///////////////////////////
// alert(`Formula is : a * x + b = 0`);
// let a = prompt("Enter a:");
// let b = prompt("Enter b:");
// let x = b / a;
// alert(`x = -${x}`);
//===============================================
////////////////// #7 ///////////////////////////
// let currenHours = prompt("Enter current hour:") * 60;
// let currentMinutes = prompt("Enter current minutes:");
// let currentTime = +currenHours + +currentMinutes;
// let leftTime = 1440 - currentTime;
// let leftHours = Math.floor(+leftTime / 60);
// let leftMinutes = leftTime - (leftHours * 60);
// alert(`There are ${leftHours} H : ${leftMinutes} mm to the end of day`);

//===============================================
////////////////// #8 ///////////////////////////
// let threeDigitNumber = prompt("Enter three digit numbeer:");

// let secondDgit = ((+threeDigitNumber % 100) - (threeDigitNumber % 10)) / 10;
// alert(secondDgit);
//===============================================
////////////////// #9 ///////////////////////////
// let fiveDigitNumber = prompt("Enter five digit numbeer:");
// alert(`${fiveDigitNumber[4]}${fiveDigitNumber[0]}${fiveDigitNumber[1]}${fiveDigitNumber[2]}${fiveDigitNumber[3]}`);
//===============================================
////////////////// #10 ///////////////////////////
// let seles = prompt("Enter amount of seles:");
// alert(`The slary is: ${(seles / 10) + 250} $`)
//===============================================