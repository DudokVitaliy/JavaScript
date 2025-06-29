//////////////////////////// OBJECT ////////////////////////////
// let arr = [1,2,3,4,5];
// console.log(arr);

// let student = new Object();
// student.name = "Denis";
// student.age = 18;
// console.log(student);

// let test = "marks"
// let id = 5;
// let student = {
//     name: "Denis",
//     year: 2005,
//     [test]: [11,12,10],
//     id: id,
//     ["user" + id]: "user",
//     getAge: function () { 
//         return new Date().getFullYear() - this.year
//     },
// }
// console.log(student);
// student.surname = "Bondar";
// console.log(student.name);
// console.log(student[test]);
// console.log(student["user5"]);
// for (const key in student){
//     document.writeln(`<p> ${key} : ${student[key]} </p>`);
// }

// console.log("name" in student);
// console.log("test" in student);
// console.log(test in student);

// delete student["user5"];

// function Car(model, year)
// {
//     this.model = model
//     this.year = year
//     this.print = function () {console.log(this.model, this.year)}
// }

// let ford = new Car("Ford", 2012);
// let bmw = new Car("BMW", 2020);
// console.log(ford);
// console.log(bmw);

// // ford.color = "black";
// // bmw.color = "black";

// Car.prototype.color = "black";
// ford.color = "red"

// Car.prototype.getAge = function (){
//     return new Date().getFullYear() - this.year
// }

// console.log(ford.color)
// console.log(bmw.color)

// let ford = Object.create({
//     calculateDistancePerYear :
//     function()
//     {
//         Object.defineProperty(this, "distanceYear", {
//             value:this.distance/ this.age,
//             writable: false,
//             configurable: false,
//             enumerable: false
//         })
//     }
// },{
//     model : {
//         value: "Ford",
//         writable: false,
//         configurable: false,
//         enumerable: true
//     },
//     year : {
//         value: 2002,
//         writable: false,
//         configurable: false,
//         enumerable: true
//     },
//     distance : {
//         value: 1234,
//         writable: true,
//         configurable: true,
//         enumerable: false
//     },
//     age: {
//         get: function(){
//             console.log("get value")
//             return new Date().getFullYear() - this.year
//         },
//         set : function(){
//             console.log("edit value age", this.age > 30)
//         }
//     }
// })
// for (const key in ford){
//     document.writeln(`<p> ${key} : ${ford[key]} </p>`);
// }
// console.log(ford);

// console.log(Object.keys(ford))
// Object.keys(ford).forEach(key => document.writeln(`<p> ${key} : ${ford[key]}`))
/////////////////////////STRING DATE MATH //////////////////////
// String
///////// String

// let str = "Hello World"; // "", '', ``
// // let line = `
// //     test 
// //             test
// // `;
// // console.log(line)
// // document.writeln(line)

// console.log(str, " str[0]      " ,str[0])
// console.log(str, " str.at(-1)  " ,str.at(-1))
// str[0] = "A";
// console.log(str, " str[0]      " ,str[0])
// console.log("  ")


// console.log(str, " str.length           " ,str.length)
// console.log(str, " str.indexOf('W')     " ,str.indexOf("W"))
// console.log(str, " str.indexOf('w')     " ,str.indexOf("w"))
// console.log(str, " str.indexOf('Word')  " ,str.indexOf("Word"))
// console.log(str, " str.lastIndexOf('l') " ,str.lastIndexOf("l"))
// console.log(str, " str.indexOf('l')     " ,str.indexOf("l"))
// console.log(str, " str.includes('l')    " ,str.includes("l"))
// console.log("  ")


// console.log(str, " str.toLowerCase()       " ,str.toLowerCase())
// console.log(str, " str.toUpperCase()       " ,str.toUpperCase())
// console.log(str, " str.charCodeAt(0)       " ,str.charCodeAt(0))
// console.log("  ")

// console.log(str, " str.slice(0,4)       " ,str.slice(0,4))
// console.log(str, " str.substring(0,4)   " ,str.substring(0,4))
// console.log(str, " str.substr(0,4)      " ,str.substr(1,4))

// let line = new String("   trim   ");
// console.log(line, line.length, line.trim().length,line.trim())
// console.log(line, line.length, line.trimStart().length,line.trimStart())
// console.log(line, line.length, line.trimEnd().length,line.trimEnd())


// console.log(str, " str.replace()       " ,str.replace("World","JavaScript"))
// console.log(str, " str.replace()       " ,str.replace("l","2"))
// console.log(str, " str.replace()       " ,str.replaceAll("l","2"))
// console.log(str, " str.startsWith()    " ,str.startsWith("he"))
// console.log(str, " str.startsWith()    " ,str.startsWith("He"))
// console.log(str, " str.endsWith()      " ,str.endsWith("He"))
// console.log(str, " str.endsWith()      " ,str.endsWith("ld"))
// console.log(str, " str.localeCompare() " ,str.localeCompare(str))
// console.log(str, " str.repeat()      " ,str.repeat(5))



// /////Date
// let date = new Date();

// console.log("Date ", date);
// console.log("getDate()         ", date.getDate());
// console.log("getDay()          ", date.getDay());
// console.log("getFullYear()     ", date.getFullYear());
// console.log("getMonth()        ", date.getMonth());
// console.log("getHours()        ", date.getHours());
// console.log("getMinutes()      ", date.getMinutes());
// console.log("getSeconds()      ", date.getSeconds());
// console.log("getMilliseconds() ", date.getMilliseconds());
// console.log("date.getTime()    ", date.getTime());
// //date.setMonth(7)
// console.log("Date ", date);

// let hol = new Date(2025,6,19)
// console.log(hol)

// let days = (hol - date) / (1000*60*60*24)

// console.log(days)


///// Math
let number = 4.589, number2 = 4.231

document.writeln(`<table>`)
document.writeln(`
    <tr>
    <td> Mathods </td>
    <td> Number 1 </td>
    <td> Result </td>
    <td> Number 2</td>
    <td> Result </td>
    </tr>`)
document.writeln(`
    <tr>
    <td> Math.ceil </td>
    <td> ${number} </td>
    <td> ${Math.ceil(number)} </td>
    <td> ${number2}</td>
    <td> ${Math.ceil(number2)} </td>
    </tr>`)

document.writeln(`
    <tr>
    <td> Math.floor </td>
    <td> ${number} </td>
    <td> ${Math.floor(number)} </td>
    <td> ${number2}</td>
    <td> ${Math.floor(number2)} </td>
    </tr>`)

    document.writeln(`
    <tr>
    <td> Math.round </td>
    <td> ${number} </td>
    <td> ${Math.round(number)} </td>
    <td> ${number2}</td>
    <td> ${Math.round(number2)} </td>
    </tr>`)

document.writeln(`</table>`)

console.log("Math.min(1,5,4,7,8)",Math.min(1,5,4,7,8))
console.log("Math.max(1,5,4,7,8)",Math.max(1,5,4,7,8))
console.log("Math.sqrt(4)       ",Math.sqrt(4))
console.log("Math.pow(2,8)      ",Math.pow(2,8))
console.log("Math.pow(8,1/3)      ",Math.pow(8,1/3))
console.log("  ")

for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * (22 - 11 + 1) + 11))
}
// 11 - 22
// rand() * (max - min + 1) + min
