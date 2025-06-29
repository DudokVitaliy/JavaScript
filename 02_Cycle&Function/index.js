// let i = 0
// while (i < 10)
// {
//     document.write(`<p style = font-size:14 > Item ${i} </p>`);
//     i ++;
// }

// let res;
// do{
//     res = prompt("2 + 2 = ");
// }
// while(res != 4)

// let i = 10;
// while(i >= 0)
// {
//     alert(i--);
// }
// document.write("<img src = 'https://media.tenor.com/1ut6ffLeqSYAAAAM/nuclear-mushroom.gif'>")

// for (let i = 0; i < 10;) {
//     document.write(`<p style = "font-size:14px;"> Item ${++i} </p>`)
// }

// let i;
// for (i = 0; ; ) {
//     res = prompt("2 + 2 = ?");
//     ++i
//     if(res == 4)
//         break; 
// }
// console.log(i);

// for (let i = 0; i < 5; i++) {
//     let color = prompt("Enter color");

//     if (color.length < 5)
//         continue

//     document.write(`<p style = "font-size:18px; background-color:${color}; padding:15px;"> ${color}</p>`)
// }

// FUNCTION

// console.log("sum",sum(2,5))


// function sum(a, b) {
//     // console.log(`${a} + ${b} = ${a + b}`)
//     return a + b;
// }

// let sum_ = function(a,b){
//     return a + b;
// }
// console.log("sum_",sum_(2,5))

// sum("test","test");

// let getSecond = (minutes) => 
// {
//     return minutes * 60
// }

// let getSecond = minutes => 
// {
//     return minutes * 60
// }

// let getSecond = minutes => minutes * 60;
// console.log(getSecond(3), "sec")

// let sum = (a, b, c, d = 0, e = 0) => {
//     return a + b + c + d + e;
// }
// console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3));

// let sum = (...args) => {
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];

//     }
//     return sum;
// }

// console.log(sum(1, 2, 3, 4, 5))

// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1;
// 0! = 1

let factorial = (n) =>
{
    if(n == 1 || n == 0) return 1
    return n * factorial(n-1)
}
console.log(factorial(5))
