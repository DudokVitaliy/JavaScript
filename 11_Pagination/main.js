const api = 'https://dummyjson.com/products';
const grid = document.querySelector('#card-grid');

async function loadProducts() {
    const response = await fetch(api + `?limit=${pagination.limit}&skip=${pagination.skip}`);
    const data = await response.json();

    console.log(data);
    data.products.forEach(i => addProductToHtml(i))
}

function addProductToHtml(i) {

    var source = document.getElementById('product-card-template').innerHTML;
    var cardHtml = Handlebars.compile(source)(i);

    grid.innerHTML += cardHtml;

    // grid.innerHTML += `<div class="col">
    //                     <div class="card h-100">
    //                         <img height="200" src="${i.thumbnail}"
    //                             class="card-img-top" alt="${i.title}">
    //                         <div class="card-body">
    //                             <h5 class="card-title">${i.title}</h5>
    //                             <p class="card-text">${i.price}$ - ${i.category}</p>
    //                         </div
    //                     </div>
    //                 </div>`
}

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
})

loadMoreBtn.onclick = () => {
    pagination.next();
    loadProducts();
}