// 1
let age = parseInt(prompt("Enter your age: "));

if (age >= 0 && age < 12) {
    alert("Child");
} else if (age >= 12 && age < 18) {
    alert("Teenager");
} else if (age >= 18 && age < 60) {
    alert("Adult");
} else if (age >= 60) {
    alert("Pensioner");
} else {
    alert("Incorrect age");
}

// 2
let num = prompt("Enter number from 0 to 9:");
switch (num) {
    case "0": alert(")"); break;
    case "1": alert("!"); break;
    case "2": alert("@"); break;
    case "3": alert("#"); break;
    case "4": alert("$"); break;
    case "5": alert("%"); break;
    case "6": alert("^"); break;
    case "7": alert("&"); break;
    case "8": alert("*"); break;
    case "9": alert("("); break;
    default: alert("Incorrect number");
}

// 3
let number = prompt("Enter a three-digit number:");
let a = number[0];
let b = number[1];
let c = number[2];

if (a === b || a === c || b === c) {
    alert("There are the same numbers");
} else {
    alert("All numbers are different");
}

// 4
let year =+prompt("Enter year:");

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    alert("This is a leap year.");
} else {
    alert("This is not a leap year.");
}

// 5
let num5 = prompt("Enter a five-digit number: ");

if (num5.length === 5 && num5[0] === num5[4] && num5[1] === num5[3]) {
    alert("This is a palindrome");
} else {
    alert("This is not a palindrome");
}

// 6
let usd = parseFloat(prompt("Enter the amount in USD: "));
let currency = prompt("What currency to convert to? (EUR, UAN, AZN):");

let result = currency === "EUR" ? usd * 0.92 :
             currency === "UAN" ? usd * 37.5 :
             currency === "AZN" ? usd * 1.7 : null;

if (result !== null) {
    alert("Sum: " + result);
} else {
    alert("Unknown currency");
}

// 7
let sum = parseFloat(prompt("Enter the purchase amount:"));
let discount = sum >= 500 ? 0.07 : sum >= 300 ? 0.05 : sum >= 200 ? 0.03 : 0;
let final = sum - sum * discount;

alert("Amount due: " + final);

// 8
let circle = parseFloat(prompt("Enter the circumference of the circle:"));
let square = parseFloat(prompt("Enter the perimeter of the square:"));

let diameter = circle / 3.14;
let side = square / 4;

if (diameter <= side) {
    alert("The circle will fit into the square");
} else {
    alert("The circle won't fit.");
}

// 9
let score = 0;

let q1 = prompt("How much is 2 + 2? \na) 3  b) 4  c) 5");
if (q1 === "b") score += 2;

let q2 = prompt("The capital of Ukraine? \na) Kyiv b) Lviv c) Kharkiv");
if (q2 === "a") score += 2;

let q3 = prompt("How many days are there in a week? \na) 5  b) 6  c) 7");
if (q3 === "c") score += 2;

alert("Your result: " + score + " points");

// 10
let day = parseInt(prompt("Enter day:"));
let month = parseInt(prompt("Enter month:"));
year = parseInt(prompt("Enter year:"));

let isLeap = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);

let daysInMonth = 
    month === 2 ? (isLeap ? 29 : 28) :
    (month === 4 || month === 6 || month === 9 || month === 11) ? 30 : 31;

if (day < daysInMonth) {
    day++;
} else {
    day = 1;
    if (month < 12) {
        month++;
    } else {
        month = 1;
        year++;
    }
}

alert("Next date: " + day + "." + month + "." + year);





