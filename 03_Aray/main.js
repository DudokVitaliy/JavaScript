
//let colors = new Array(10);
//let colors = new Array("red", "blue", "green", "purple", "black");
let colors = ["red", "white", "yellow", "green", "blue"];
console.log(colors);

// document.write("<ol>")
// for (let index = 0; index < colors.length; index+=2) {
//     document.write(`<li style = "border: solid 3px ${colors[index]}; padding:15px; margin:10px; font-size:18px; font-weight:bold;"> ${colors[index]}</li>`)
// }
// document.write("</ol>")

// document.write("<ol>")
// for (const color of colors) {
//     document.write(`<li style = "border: solid 3px ${color}; padding:15px; margin:10px; font-size:18px; font-weight:bold;"> ${color}</li>`)
// }
// document.write("</ol>")

let print = (arr, text = "") => {

    if(text.length > 0)
    {
        document.write(`<h2 style = "text-align:center;">${text}</h2>`)
    }
    document.write("<ol>")
    arr.forEach(color => {
        document.write(`<li style = "border: solid 3px ${color}; padding:15px; margin:10px; font-size:18px; font-weight:bold;"> ${color}</li>`)
    });
    document.write("</ol>")
}

print(colors,"Origin array")

colors.push("blue","yellow");
print(colors,"Push")

colors.unshift("green","orange");
print(colors,"Unshift")

colors.pop();
print(colors,"Pop")

colors.shift();
print(colors,"Shift")

let color_slice = colors.slice(0,3)
print(color_slice,"slice")

colors.splice(0,3,"red","green","brown","pink");
print(colors,"splice")

colors = colors.filter(item => item.length >= 5)
print(colors,"filter")

let lenght_colors = colors.map(item => item.length);
console.log(lenght_colors)

colors = colors.concat(color_slice)

let rest_ = [
    ...color_slice,
    ...colors
]
console.log(rest_)
print(colors,"concat")

console.log(colors.includes("green",2))
console.log(colors.indexOf("green",0))
console.log(colors.lastIndexOf("red"))
console.log(colors.findIndex(item => item == "red"))

document.write(colors.join(" ! "))

let line = "Lorem ipsum dolor sit amet";
console.log(line);
console.log(line.split("o"));
console.log(colors[22])