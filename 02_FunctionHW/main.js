// 1
let a = +prompt("Enter first number: ");
let b = +prompt("Enter second number: ");
function comparison(a, b)
{
    if (a > b)
        return 1;
    else if (a < b)
        return -1;
    else
        return 0;
}
alert("Result: " + comparison(a,b));

// 2
a = +prompt("Enter number: ");

let factorial = (a) =>
{
    if (a == 1 || a == 0)
        return 1;
    return a * factorial(a - 1);
}
alert(`Factorial number ${a} = ${factorial(a)}`);

// 3
a = prompt("Enter first number: ");
b = prompt("Enter second number: ");
let c = prompt("Enter third number: ");

let trasform = (a,b,c) =>
{
    return parseInt(a + b + c);
}
alert("Result: " + trasform(a,b,c));

// 4
let area = (a, b = 0) =>
{
    return b == 0 ? a * a : a * b;
}
alert("Result: " + area(+prompt("Enter length: "), +prompt("Enter width: ")));

// 5
let isPerfectNumber = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}
a = +prompt("Enter number: ");
if (isPerfectNumber(a))
    alert(`${a} is perfect number`);
else
    alert(`${a} not is perfect number`);

// 6
let perfectArr = new Array;
let PerfectNumbersInRange = (min, max) => {
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            perfectArr.push(i);
        }
    }
}
a = +prompt("Enter start of range: ");
b = +prompt("Enter end of range: ");
PerfectNumbersInRange(a, b);
// for (i = 0; i < perfectArr.length; i ++)
// {
//     alert(`${perfectArr[i]} - is perfect`);
// }
alert(`All perfect numbers on range[${a}; ${b}]: ${perfectArr.join('; ')}`);

// 7
function showTime(hours, minutes = 0, seconds = 0) {
    let h = hours.toString().padStart(2, "0");
    let m = (minutes !== 0 ? minutes : 0).toString().padStart(2, "0");
    let s = (seconds !== 0 ? seconds : 0).toString().padStart(2, "0");

    let result = `${h}:${m}:${s}`;
    document.write(`<h2 style="text-align:center;">${result}</h2>`);
    return result;
}
showTime(+prompt("hours: "), +prompt("minutes: "), +prompt("seconds: "))

// 8
function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}
alert("Resalt in seconds: " + timeToSeconds(+prompt("hours: "), +prompt("minutes: "), +prompt("seconds: ")));

// 9
function secondsToTime(totalSeconds) {
    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;

    return showTime(h, m, s);
}
secondsToTime(+prompt("Enter time on seconds: "));

// 10
function timeDifference(h1, m1, s1, h2, m2, s2) {
    let seconds1 = timeToSeconds(h1, m1, s1);
    let seconds2 = timeToSeconds(h2, m2, s2);
    let diff = Math.abs(seconds1 - seconds2);

    return secondsToTime(diff);
}
timeDifference(+prompt("hours_1: "), +prompt("minutes_1: "), +prompt("seconds_1: "), +prompt("hours_2: "), +prompt("minutes_2: "), +prompt("seconds_2: "));





