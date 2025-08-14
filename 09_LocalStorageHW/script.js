// Реєстрація
function handleRegister(e) {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        password: document.getElementById("password").value,
        avatar: document.getElementById("avatar").value
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Реєстрація успішна!");
    window.location.href = "login.html";
}

// Вхід
function handleLogin(e) {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    let user = users.find(u => (u.username === login || u.email === login) && u.password === password);

    if(user){
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "profile.html";
    } else {
        alert("Невірний логін або пароль!");
    }
}

// Профіль
function loadProfile() {
    let user = JSON.parse(localStorage.getItem("currentUser"));

    if(!user){
        window.location.href = "login.html";
    } else {
        document.getElementById("profile").innerHTML = `
            <img src="${user.avatar}" alt="Avatar">
            <div><b>Ім'я:</b> ${user.firstName}</div>
            <div><b>Прізвище:</b> ${user.lastName}</div>
            <div><b>Ім'я користувача:</b> ${user.username}</div>
            <div><b>Пошта:</b> ${user.email}</div>
            <div><b>Телефон:</b> ${user.phone}</div>
            <div><b>Пароль:</b> ${user.password}</div>
        `;
    }
}
