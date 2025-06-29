// 1
let car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2020,
    avgSpeed: 100,

    showInfo: function () {
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year of release: ${this.year}`);
        console.log(`Average speed: ${this.avgSpeed} km/h`);
    },

    calculateTravelTime: function (distance) {
        let hours = distance / this.avgSpeed;
        let breaks = Math.floor(hours / 4);
        let totalTime = hours + breaks;
        console.log(`It takes approximately ${totalTime.toFixed(2)} hours to travel ${distance} km`);
        return totalTime;
    }
};

car.showInfo();
car.calculateTravelTime(850);

// 2
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function reduce(fraction) {
    let divisor = gcd(fraction.numerator, fraction.denominator);
    return {
        numerator: fraction.numerator / divisor,
        denominator: fraction.denominator / divisor
    };
}

function addFractions(f1, f2) {
    let numerator = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
    let denominator = f1.denominator * f2.denominator;
    return reduce({ numerator, denominator });
}

function subtractFractions(f1, f2) {
    let numerator = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
    let denominator = f1.denominator * f2.denominator;
    return reduce({ numerator, denominator });
}

function multiplyFractions(f1, f2) {
    let numerator = f1.numerator * f2.numerator;
    let denominator = f1.denominator * f2.denominator;
    return reduce({ numerator, denominator });
}

function divideFractions(f1, f2) {
    let numerator = f1.numerator * f2.denominator;
    let denominator = f1.denominator * f2.numerator;
    return reduce({ numerator, denominator });
}

let fraction1 = { numerator: 3, denominator: 4 };
let fraction2 = { numerator: 5, denominator: 6 };

console.log("Addition:", addFractions(fraction1, fraction2));
console.log("Subtraction:", subtractFractions(fraction1, fraction2));
console.log("Multiplication:", multiplyFractions(fraction1, fraction2));
console.log("Division:", divideFractions(fraction1, fraction2));

// 3
let time = {
    hours: 20,
    minutes: 30,
    seconds: 45,

    showTime: function () {
        let h = this.hours.toString().padStart(2, "0");
        let m = this.minutes.toString().padStart(2, "0");
        let s = this.seconds.toString().padStart(2, "0");
        console.log(`${h}:${m}:${s}`);
    },

    addSeconds: function (sec) {
        this.seconds += sec;
        this.minutes += Math.floor(this.seconds / 60);
        this.seconds %= 60;
        this.addMinutes(0);
    },

    addMinutes: function (min) {
        this.minutes += min;
        this.hours += Math.floor(this.minutes / 60);
        this.minutes %= 60;
        this.addHours(0);
    },

    addHours: function (hr) {
        this.hours += hr;
        this.hours %= 24;
    }
};

time.showTime();
time.addSeconds(30);
time.showTime();
time.addMinutes(90);
time.showTime();
time.addHours(3);
time.showTime();
