////////////// 1 ///////////////
let red = document.querySelector('.red');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');

red.addEventListener('click', (e)=>{
    document.querySelector('p').style.color = 'red';
    alert('Red clicked!');
    e.stopPropagation();
}, false);
green.addEventListener('click', (e)=>{
    document.querySelector('p').style.color = 'green';
    alert('Green clicked!');
    e.stopPropagation();
}, false);
blue.addEventListener('click', (e)=>{
    document.querySelector('p').style.color = 'blue';
    alert('Blue clicked!');
    e.stopPropagation();
},  false   );

//////////////// 2 ///////////////
// document.querySelector('a').addEventListener('click', (e)=>{
//     e.preventDefault();
// });

// document.querySelector('button').addEventListener('click', (e)=>{
//     e.preventDefault();
// });

// document.addEventListener('contextmenu', (e)=>{
//     e.preventDefault();
// });

//////////////// 3 ///////////////
// let li = document.querySelectorAll('ul li');
// li.forEach((item)=>{
//     item.addEventListener('click', () =>{
//         item.style.backgroundColor = 'yellow';
//     });
// });

document.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        if (e.target.style.backgroundColor == e.target.dataset.color) {
            e.target.style.backgroundColor = "";
        }
        else{
            e.target.style.backgroundColor = e.target.dataset.color;
        }
    }
});

//////////////// 4 ///////////////
let div = document.createElement("div");
div.classList.add("block");

let p = document.createElement("p");
p.textContent = "This is a new paragraph inside the div.";
p.setAttribute("title", "Test Paragraph");
div.append(p);

let img = new Image();
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0IQhVr9DDJCq61QX28zCoiqDrvezBh5ylw&s";
img.style.width = "100%";
div.append(img)

let btn = document.createElement("button");
btn.textContent = "Remove";
div.append(btn);
// document.body.append(div);
// document.body.prepend(div);
document.querySelector(".preventDefault").after(div);
//document.querySelector(".preventDefault").before(div);

btn.addEventListener('click',function(){
    //this.previousElementSibling.remove();
    this.parentElement.remove();
})