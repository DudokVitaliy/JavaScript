class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        } else {
            console.log("Radius must be a positive number!");
        }
    }
    get diameter() {
        return this._radius * 2;
    }
    getArea() {
        return Math.PI * this._radius * this._radius;
    }
    getCircumference() {
        return 2 * Math.PI * this._radius;
    }
}
let circle = new Circle(5);

console.log("Radius:", circle.radius);     
console.log("Diameter:", circle.diameter);
console.log("Area:", circle.getArea().toFixed(2));
console.log("Lenght:", circle.getCircumference().toFixed(2));

circle.radius = 10;
console.log("\nAfter radius change:");
console.log("Radius:", circle.radius);
console.log("Diameter:", circle.diameter);
console.log("Area:", circle.getArea().toFixed(2));
console.log("Lenght:", circle.getCircumference().toFixed(2));

// 2
class HTMLElement {
  constructor(tagName, isSelfClosing = false) {
    this.tagName = tagName;
    this.isSelfClosing = isSelfClosing;
    this.textContent = '';
    this.attributes = [];
    this.styles = [];
    this.children = [];
  }
  addAttribute(name, value) {
    this.attributes.push({ name, value });
  }
  addStyle(property, value) {
    this.styles.push({ property, value });
  }
  appendChild(element) {
    this.children.push(element);
  }
  prependChild(element) {
    this.children.unshift(element);
  }
  getHtml() {
    const attrs = this.attributes.map(attr => `${attr.name}="${attr.value}"`).join(' ');
    const styles = this.styles.map(s => `${s.property}: ${s.value};`).join(' ');
    const allAttrs = [
      attrs,
      styles ? `style="${styles}"` : ''
    ].filter(Boolean).join(' ');

    const startTag = `<${this.tagName}${allAttrs ? ' ' + allAttrs : ''}${this.isSelfClosing ? ' /' : ''}>`;

    if (this.isSelfClosing) return startTag;

    const childrenHtml = this.children.map(child => child.getHtml()).join('');
    return `${startTag}${this.textContent}${childrenHtml}</${this.tagName}>`;
  }
}

// const wrapper = new HTMLElement('div');
// wrapper.addAttribute('id', 'wrapper');
// wrapper.addStyle('display', 'flex');

// for (let i = 0; i < 2; i++) {
//   const itemDiv = new HTMLElement('div');
//   itemDiv.addStyle('width', '300px');
//   itemDiv.addStyle('margin', '10px');

//   const h3 = new HTMLElement('h3');
//   h3.textContent = 'Lorem Ipsum';

//   const img = new HTMLElement('img', true);
//   img.addAttribute('src', 'lipsum.jpg');
//   img.addAttribute('alt', 'Lorem Ipsum');
//   img.addStyle('width', '100%');

//   const p = new HTMLElement('p');
//   p.addStyle('text-align', 'justify');
//   p.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. ` +
//     `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ` +
//     `when an unknown printer took a galley of type and scrambled it to make a type specimen book. `;

//   const a = new HTMLElement('a');
//   a.addAttribute('href', 'https://www.lipsum.com/');
//   a.addAttribute('target', '_blank');
//   a.textContent = 'More...';

//   itemDiv.appendChild(h3);
//   itemDiv.appendChild(img);
//   itemDiv.appendChild(p);
//   itemDiv.appendChild(a);

//   wrapper.appendChild(itemDiv);
// }
// document.write(wrapper.getHtml());

// 3
class CssClass {
  constructor(className) {
    this.className = className;
    this.styles = {};
  }
  setStyle(property, value) {
    this.styles[property] = value;
  }
  removeStyle(property) {
    delete this.styles[property];
  }
  getCss() {
    let cssString = `.${this.className} {\n`;
    for (let property in this.styles) {
      cssString += `  ${property}: ${this.styles[property]};\n`;
    }
    cssString += `}`;
    return cssString;
  }
}
const myClass = new CssClass('card');

myClass.setStyle('width', '300px');
myClass.setStyle('margin', '10px');
myClass.setStyle('border', '1px solid #ccc');

// 4
class HtmlBlock {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.cssClasses = [];
  }
  addCssClass(cssClass) {
    this.cssClasses.push(cssClass);
  }
  getCode() {
    const styles = this.cssClasses.map(css => css.getCss()).join('\n');
    const styleTag = `<style>\n${styles}\n</style>`;
    const htmlContent = this.rootElement.getHtml();
    return `${styleTag}\n${htmlContent}`;
  }
}
const wrapClass = new CssClass('wrap');
wrapClass.setStyle('display', 'flex');

const blockClass = new CssClass('block');
blockClass.setStyle('width', '300px');
blockClass.setStyle('margin', '10px');

const imgClass = new CssClass('img');
imgClass.setStyle('width', '100%');

const textClass = new CssClass('text');
textClass.setStyle('text-align', 'justify');

const new_wraper = new HTMLElement('div');
new_wraper.addAttribute('id', 'wrapper');
new_wraper.addAttribute('class', 'wrap');

for (let i = 0; i < 2; i++) {
  const itemDiv = new HTMLElement('div');
  itemDiv.addAttribute('class', 'block');

  const h3 = new HTMLElement('h3');
  h3.textContent = 'What is Lorem Ipsum?';

  const img = new HTMLElement('img', true);
  img.addAttribute('class', 'img');
  img.addAttribute('src', 'lipsum.jpg');
  img.addAttribute('alt', 'Lorem Ipsum');

  const p = new HTMLElement('p');
  p.addAttribute('class', 'text');
  p.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `
    + `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, `
    + `when an unknown printer took a galley of type and scrambled it to make a type specimen book. `;

  const a = new HTMLElement('a');
  a.addAttribute('href', 'https://www.lipsum.com/');
  a.addAttribute('target', '_blank');
  a.textContent = 'More...';

  p.appendChild(a);
  itemDiv.appendChild(h3);
  itemDiv.appendChild(img);
  itemDiv.appendChild(p);

  new_wraper.appendChild(itemDiv);
}

const block = new HtmlBlock(new_wraper);
block.addCssClass(wrapClass);
block.addCssClass(blockClass);
block.addCssClass(imgClass);
block.addCssClass(textClass);

document.write(block.getCode());





