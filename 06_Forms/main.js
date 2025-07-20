const addBtn = document.getElementById('addBtn');
const tableBody = document.getElementById('product-list');
const clearAllBtn = document.getElementById('clearAllBtn');

const form = document.forms.productForm;
const nameInput = form.name;
const priceInput = form.price;
const quantityInput = form.quantity;
const categoryInput = form.category;
const usedInput = form.used;

addBtn.onclick = (e) => {
    e.preventDefault();
    const item = new Product(
        nameInput.value,
        priceInput.value,
        quantityInput.value,
        categoryInput.value,
        usedInput.checked
    );
    tableBody.innerHTML += item.toHTMLrow();
    // tableBody.innerHTML += `<tr>
    //     <td>${nameInput.value}</td>
    //     <td>${priceInput.value}</td>
    //     <td>${quantityInput.value}</td>
    //     <td>${categoryInput.value}</td>
    //     <td>${usedInput.checked ? 'Yes' : 'No'}</td>
    //     </tr>`
}
clearAllBtn.onclick = (e) => {
    e.preventDefault();
    tableBody.innerHTML = '';

}

