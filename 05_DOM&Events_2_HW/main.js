const list = document.getElementById('linkList');
const links = list.getElementsByTagName('a');
for (let link of links) {
const href = link.getAttribute('href');
if (href.startsWith('http://') || href.startsWith('https://')) {
    link.classList.add('dashed-link');
}}

const folders = document.querySelectorAll(".folder");

folders.forEach(folder => {
const parentLi = folder.parentElement;
const subList = parentLi.querySelector("ul");

if (subList) {
    subList.classList.add("collapsed");

    folder.addEventListener("click", () => {
    subList.classList.toggle("collapsed");
    });
}
});

let books = document.getElementById('book-list');
let lastSelected;

books.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
    if (e.ctrlKey || e.metaKey) {
        e.target.classList.toggle('selected');
    } else if (e.shiftKey && lastSelected) {
        let items = Array.from(books.children);
        let start = items.indexOf(lastSelected);
        let end = items.indexOf(e.target);
        items.forEach((li, i) => {
        if ((i >= Math.min(start, end)) && (i <= Math.max(start, end))) {
            li.classList.add('selected');
        }
        });
    } else {
        Array.from(books.children).forEach(li => li.classList.remove('selected'));
        e.target.classList.add('selected');
    }
    lastSelected = e.target;
    }
});

let style = document.createElement('style');
style.innerHTML = `
    .selected {
    background-color: #ffc107 !important;
    }
`;
document.head.appendChild(style);

let table = document.querySelector('table');
let headers = table.querySelectorAll('thead th');
let sortDirection = {};

headers.forEach((header, index) => {
header.style.cursor = 'pointer';
header.addEventListener('click', () => {
    if (!sortDirection[index] || sortDirection[index] === 'desc') {
    sortDirection = {};
    sortDirection[index] = 'asc';
    } else {
    sortDirection = {};
    sortDirection[index] = 'desc';
    }

    sortTableByColumn(table, index, sortDirection[index]);
    headers.forEach((th, i) => {
    th.classList.remove('sorted-asc', 'sorted-desc');
    if (i === index) {
        th.classList.add(sortDirection[index] === 'asc' ? 'sorted-asc' : 'sorted-desc');
    }
    });
});
});

function sortTableByColumn(table, columnIndex, direction = 'asc') {
    let tbody = table.tBodies[0];
    let rows = Array.from(tbody.querySelectorAll('tr'));
    let isNumber = table.tHead.rows[0].cells[columnIndex].classList.contains('number');
    rows.sort((a, b) => {
      let cellA = a.cells[columnIndex].textContent.trim();
      let cellB = b.cells[columnIndex].textContent.trim();

    if (isNumber) {
    return direction === 'asc'
        ? parseFloat(cellA) - parseFloat(cellB)
        : parseFloat(cellB) - parseFloat(cellA);
    } else {
    return direction === 'asc'
        ? cellA.localeCompare(cellB, undefined, { sensitivity: 'base' })
        : cellB.localeCompare(cellA, undefined, { sensitivity: 'base' });
    }
});
tbody.innerHTML = '';
rows.forEach(row => tbody.appendChild(row));
}
