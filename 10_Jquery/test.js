// working with DOM using vanila JS

// querySelectorAll vs querySelector
const li = document.querySelector('.product-list li:first-child');

li.innerHTML += "...!";
li.setAttribute('data-test', 'hello');

// working with DOM using jQuery
// syntax: $(selector).method().method()

$('.product-list li').first().attr('data-price', '4500').html("...!");