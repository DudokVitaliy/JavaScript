// 1
function processArray(array, callback) {
    return array.map(callback);
}

function doubleElement(element) {
    return element * 2;
}

function reverseElement(element) {
    return String(element).split('').reverse().join('');
}

function runTask1() {
    let input = document.getElementById("task1input").value.trim();
    if (!input) return alert("Enter numbers or words separated by commas!");
    let array = input.split(",").map(item => isNaN(item) ? item.trim() : Number(item.trim()));

    let doubled = processArray(array, doubleElement);
    let reversed = processArray(array, reverseElement);

    document.getElementById("task1output").innerHTML =
        "Doubled: " + doubled.join(", ") +
        "<br>Reverse: " + reversed.join(", ");
}

// 2
function sortArray(array) {
    return new Promise((resolve, reject) => {
        if (array.length === 0) {
            reject("Array is empty");
        } else {
            setTimeout(() => {
                resolve(array.sort((a, b) => a - b));
            }, 2000);
        }
    });
}

function runTask2() {
    let input = document.getElementById("task2input").value.trim();
    if (!input) return alert("Enter numbers separated by commas!");
    let array = input.split(",").map(num => Number(num.trim())).filter(n => !isNaN(n));

    sortArray(array)
        .then(sorted => document.getElementById("task2output").innerText = "Sorted: " + sorted.join(", "))
        .catch(err => document.getElementById("task2output").innerText = "Error: " + err);
}

// 3
function multiplyAsync(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
            reject("Incorrect values");
        } else {
            setTimeout(() => {
                resolve(a * b);
            }, 2000);
        }
    });
}

async function runTask3() {
    let a = Number(document.getElementById("task3inputA").value);
    let b = Number(document.getElementById("task3inputB").value);

    try {
        const result = await multiplyAsync(a, b);
        document.getElementById("task3output").innerText = "Result: " + result;
    } catch (error) {
        document.getElementById("task3output").innerText = "Error: " + error;
    }
}

// 4
let timer;
let seconds = 0;
let running = false;

function updateTime() {
    let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    let secs = String(seconds % 60).padStart(2, '0');
    document.getElementById("time").textContent = `${hrs}:${mins}:${secs}`;
}

function start() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            updateTime();
        }, 1000);
    }
}

function pause() {
    running = false;
    clearInterval(timer);
}

function reset() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    updateTime();
}
