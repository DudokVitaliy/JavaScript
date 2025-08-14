const API_URL = "https://thronesapi.com/api/v2/Characters";
const charactersContainer = document.getElementById("characters");
const paginationContainer = document.getElementById("pagination");

let characters = [];
let currentPage = 1;
const itemsPerPage = 10;

async function fetchCharacters() {
    try {
        const res = await fetch(API_URL);
        characters = await res.json();
        renderPage(currentPage);
        renderPagination();
    } catch (err) {
        charactersContainer.innerHTML = "<p>Помилка завантаження даних...</p>";
        console.error(err);
    }
}

function renderPage(page) {
    charactersContainer.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = characters.slice(start, end);

    pageItems.forEach(char => {
        const card = document.createElement("div");
        card.classList.add("character-card");
        card.innerHTML = `
            <img src="${char.imageUrl}" alt="${char.fullName}">
            <h3>${char.fullName}</h3>
            <p>${char.title}</p>
        `;
        charactersContainer.appendChild(card);
    });
}

function renderPagination() {
    paginationContainer.innerHTML = "";
    const totalPages = Math.ceil(characters.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;
        if (i === currentPage) btn.classList.add("active");
        btn.addEventListener("click", () => {
            currentPage = i;
            renderPage(currentPage);
            renderPagination();
        });
        paginationContainer.appendChild(btn);
    }
}
fetchCharacters();
