// -=-=-=-=-=-=-=- Callbacks -=-=-=-=-=-=-=-
console.log("Before process!");

setTimeout(() => {
    setTimeout(() => {
        console.log("Hello 2");
    }, 1000);

    console.log("Hello 1");
}, 2000);

// ---------- Promise
// TASK: get data from the database asynchronously
function getActiveUser(ip) {
    return new Promise((resolve, reject) => {
        if (ip === '198.0.0.3')
            setTimeout(() => {
                b = 30;
                resolve({ id: 1002, login: 'vlad ' });
                console.log("end!");
            }, 1000);
        else
            reject(new Error("Invalid IP address!"));
    });
};

const ip = "198.0.0.3"; // prompt("Enter IP:");

getActiveUser(ip)
    .then(res => {
        console.log("Active user:", res);
        // async work
        return getActiveUser("0.0.0.0");
    })
    .then((res) => console.log(res))
    .catch(err => console.log(err.message));

// ------------ Promise methods
// Promise.all([hardWork, getUsers]).then((values) => {
//     console.log("All promises have done!");
// }).catch((err) => console.log(err));

// Promise.race([hardWork, getUsers]).then((values) => {
//     console.log("Any promise has done!");
// }).catch((err) => console.log(err));

// ------- fetch()
const res = fetch("https://jsonplaceholder.typicode.com/users");

// res
//     .then((res) => {
//         // on fullfiled:
//         console.log(res.status);
//         return res.json();
//     })
//     .then(data => console.log(data));

// console.log("Finish");

// ------------- [async] & [await] -------------
// introduced in ES8
// [await] - wait the promise asynhronously
// [async] - allows to use await operator in function 

async function showActiveUser() {
    // getActiveUser("198.0.0.3")
    //     .then((user) => {
    //         console.log(user);
    //         userP.innerHTML = `Active user: ${user.login}`;
    //     });

    const user = await getActiveUser("198.0.0.3");

    // ... continue when the promise is finished

    console.log(user);
    document.body.innerHTML += `<p>Active user: ${user.login}</p>`;
}

// showActiveUser();

// use await with IIFE
// (async function () {
//     console.log("IIFE:", await getActiveUser("198.0.0.3"));
// }());

// TASK: get users from the server
async function showUsers() {

    // 1 - handle with .then()
    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => {
    //         console.log(response);
    //         console.log(response.status);
    //         return response.json();
    //     })
    //     .then(users => console.log(users));

    // 2 - handle with [await]
    const response = await fetch("https://dummyjson.com/comments");
    console.log(response.status);

    const data = await response.json();
    console.log("async/await:", data);
    document.body.innerHTML += `<p>Comment likes: ${data.comments[0].likes}</p>`;
}

showUsers();

//... continue ...
console.log("Finish! App is continue working...");