// // console.log(document.body);
// // console.log(document.getElementById("text"));
let p_id = document.getElementById("text");
// console.log(p_id);
// p_id.style.backgroundColor = "yellow";
// p_id.style.padding = "10px";

// let li_class = document.getElementsByClassName("style_text");
// console.log(li_class);
// // li_class[0].style.border = "double 5px blue";
// // for (let i = 0; i < li_class.length; i++) {
// //     li_class[i].style.border = "double 5px blue";}

// let p_el = document.getElementsByTagName("p");
// console.log(p_el);

// let last_li = document.querySelector("li:last-child");
// last_li.style.color = "red";
// console.log(last_li);

// let odd_li = document.querySelectorAll("li:nth-child(odd)");
// console.log(odd_li);
// odd_li.forEach((li) => {
//     li.style.color = "white";
//     li.style.backgroundColor = "blue";
//     li.style.padding = "10px";
// });

console.log(p_id.className);
// setTimeout(() => {
//     // p_id.className = "test_class";
//     p_id.classList.add("test_class");
//     setTimeout(() => {
//         p_id.classList.remove("test_class");
//     }, 3000);
// }, 3000);

// let flag = true;
//  p_id.onclick = function() 
//     {
//     if (flag) {
//         p_id.classList.add("test_class");
//         flag = false;
//     } else {
//         p_id.classList.remove("test_class");
//         flag = true;
//     }
//     }
// p_id.onclick = function() {
//     if (!this.classList.contains("test_class")) {
//         this.classList.add("test_class");
//     }
//     else {
//         this.classList.remove("test_class");
//     }
// }
// p_id.onclick = function() {
//     this.classList.toggle("test_class");
// }

let btn = document.querySelector(".wrapper").lastElementChild;
btn.addEventListener("click", function() {
    document.querySelector(".window").classList.toggle("show");
});
document.querySelector(".window").lastElementChild.addEventListener("click", function() {
    document.querySelector(".window").classList.remove("show");
});

document.querySelector(".window").addEventListener("mousemove", function(e) {
    this.style.color = "white";
    this.innerHTML = `
    X: ${e.clientX} Y: ${e.clientY} <br>
    X: ${e.offsetX} Y: ${e.offsetY} <br>`;
});