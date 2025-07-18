

// let rectangle = {
//     width : 200,
//     height : 100,
//     backgroundColor : "blue",
//     border : "solid"
// }
// let elipse = {
//     width : 200,
//     height : 100,
//     backgroundColor : "blue",
//     border : "solid",
//     borderRadius : "50%"
// }
// let circle = {
//     width : 200,
//     height : 100,
//     backgroundColor : "blue",
//     border : "solid",
//     borderRadius : "50%"
// }

class RootFigure {
    #name;
    constructor(width, height, id, backgroundColor, color) { 
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.style_figure = `width: ${this.width}px; height: ${this.height}px; 
        background-color: ${this.backgroundColor}; color: ${this.color};
        border: 3px solid ${this.color}; display: flex; align-items: center; justify-content: center;
        padding : 10px;`;
    }
    set (value) {
        this.#name = value.trim().length < 1 ? 'Figure' : value.trim();
    }
    crete() {
        document.writeln(`<div id = "${this.id}" style = "${this.style_figure}"> ${this.#name} </div>`);
    }
    getColor() {
        return `rgb(${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)})`;
    }
    generateColor() {
        document.getElementById(this.id).style.backgroundColor = this.getColor();
    }
}
class Rectangle extends RootFigure {
    constructor(width, height, id, backgroundColor, color = "black") {
        super(width, height, id, backgroundColor, color);
    }
}
class Circle extends RootFigure {
    constructor(width, id, backgroundColor, color = "black") {
        super(width, width, id, backgroundColor, color);
        this.style_figure += `border-radius: 50%;`;
    }
}   
let figure = new RootFigure(200, 100, "fig", 'blue', 'red');
figure.set("Figure")
figure.crete();
// setTimeout(() => {
//     figure.generateColor();
// }, 2000);
let interval = setInterval(() => {
    figure.generateColor();
}, 200);
setTimeout(() => {
    clearInterval(interval);
}, 5000);
console.log(figure);

let rectangle = new Rectangle(200, 100, "rec", 'pink');
rectangle.set("Rectangle");
rectangle.crete();

let circle = new Circle(200, "circ", 'green');
circle.set("Circle");
circle.crete();