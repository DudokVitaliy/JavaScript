// fetch - Fetch API to make HTTP requests defaulting to GET method

const url = 'https://jsonplaceholder.typicode.com/users';
async function loadUsers() {
    const response = await fetch(url);
    console.log(response.json());
    console.log("Got response")
}

loadUsers();
console.log("Another code");
