const API_KEY = "9257ee4946288ea85c0d6ffcdceba30f";
const todaySummary = document.getElementById("today-summary");
const todayHourly = document.getElementById("today-hourly");
const nearbyCities = document.getElementById("nearby-cities");
const forecastDays = document.getElementById("forecast-days");
const forecastHourly = document.getElementById("forecast-hourly");
const errorMessage = document.getElementById("error");
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

let currentCity = "Kyiv";

function getWeatherIcon(weatherMain) {
    switch(weatherMain.toLowerCase()) {
        case 'clear': return 'https://img.icons8.com/emoji/96/sun-emoji.png';
        case 'clouds': return 'https://img.icons8.com/emoji/96/cloud-emoji.png';
        case 'rain':
        case 'drizzle': return 'https://img.icons8.com/emoji/96/cloud-with-rain-emoji.png';
        case 'thunderstorm': return 'https://img.icons8.com/emoji/96/cloud-with-lightning-emoji.png';
        case 'snow': return 'https://img.icons8.com/emoji/96/snowflake-emoji.png';
        case 'mist':
        case 'fog': return 'https://img.icons8.com/emoji/96/fog-emoji.png';
        default: return 'https://img.icons8.com/emoji/96/question-mark-emoji.png';
    }
}

cityInput.addEventListener("keyup", (e) => {
    if(e.key === "Enter") searchBtn.click();
});

searchBtn.addEventListener("click", () => {
    if (cityInput.value.trim() !== "") {
        fetchWeather(cityInput.value.trim());
    }
});

document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
        const activeTab = document.getElementById(btn.dataset.tab);
        activeTab.classList.add("active");

        if(btn.dataset.tab === "forecast") {
            forecastHourly.classList.remove("hidden");
            todayHourly.classList.add("hidden");
        } else if(btn.dataset.tab === "today") {
            forecastHourly.classList.add("hidden");
            todayHourly.classList.add("hidden");
        }
    });
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
        fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
    }, () => {
        fetchWeather(currentCity);
        showError("Location access denied. Showing default city.");
    });
} else {
    fetchWeather(currentCity);
}

async function fetchWeatherByCoords(lat, lon) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`);
        const data = await res.json();
        currentCity = data.name;
        cityInput.value = currentCity;
        fetchWeather(currentCity, lat, lon);
    } catch (err) {
        showError("Could not retrieve coordinate data.");
    }
}

async function fetchWeather(city, lat = null, lon = null) {
    try {
        errorMessage.textContent = "";
        cityInput.value = city;
        currentCity = city;

        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`);
        if (!weatherRes.ok) throw new Error("City not found");
        const weatherData = await weatherRes.json();

        const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=en`);
        const forecastData = await forecastRes.json();

        if(!lat || !lon) {
            lat = weatherData.coord.lat;
            lon = weatherData.coord.lon;
        }

        renderGreeting(city);
        renderToday(weatherData, forecastData);
        renderForecast(forecastData);
        fetchNearbyCities(lat, lon);

    } catch (err) {
        showError("City not found", city);
    }
}

function renderGreeting(city) {
    const greetingDiv = document.getElementById("greeting");
    if(greetingDiv) greetingDiv.textContent = `Hello! Weather for ${city}`;
}

function renderToday(weather, forecast) {
    todaySummary.innerHTML = `
        <h2>${weather.name}, ${new Date().toLocaleDateString('en-US')}</h2>
        <img src="${getWeatherIcon(weather.weather[0].main)}" alt="${weather.weather[0].description}">
        <p>${weather.weather[0].description}</p>
        <p>Temperature: ${weather.main.temp}°C (Feels like ${weather.main.feels_like}°C)</p>
        <p>Sunrise: ${new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-US')}</p>
        <p>Sunset: ${new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-US')}</p>
    `;

    const todayDate = new Date().toDateString();
    const hourly = forecast.list.filter(f => new Date(f.dt * 1000).toDateString() === todayDate);

    todayHourly.innerHTML = "<h3>Hourly forecast</h3>" + hourly.map(h => {
        const hour = new Date(h.dt * 1000).getHours();
        return `
        <div>
            ${hour}:00<br>
            ${h.main.temp}°C<br>
            ${h.weather[0].description}<br>
            <img src="${getWeatherIcon(h.weather[0].main)}" alt="${h.weather[0].description}">
        </div>
        `;
    }).join("");
}

function renderForecast(forecast) {
    const days = {};
    forecast.list.forEach(item => {
        const date = new Date(item.dt * 1000).toDateString();
        if (!days[date]) days[date] = [];
        days[date].push(item);
    });

    const dayEntries = Object.entries(days).slice(0, 5);
    forecastDays.innerHTML = dayEntries.map(([date, items], index) => `
        <div class="forecast-day ${index === 0 ? 'selected' : ''}" data-date="${date}">
            <h4>${date}</h4>
            <img src="${getWeatherIcon(items[0].weather[0].main)}" alt="${items[0].weather[0].description}">
            <p>${items[0].main.temp}°C</p>
            <p>${items[0].weather[0].description}</p>
        </div>
    `).join("");

    document.querySelectorAll(".forecast-day").forEach(day => {
        day.addEventListener("click", () => {
            document.querySelectorAll(".forecast-day").forEach(d => d.classList.remove("selected"));
            day.classList.add("selected");
            const selectedDate = day.dataset.date;
            renderForecastHourly(days[selectedDate]);
        });
    });

    renderForecastHourly(dayEntries[0][1]);
}

function renderForecastHourly(items) {
    forecastHourly.innerHTML = "<h3>Hourly forecast</h3>" + items.map(h => {
        const hour = new Date(h.dt * 1000).getHours();
        return `
        <div>
            ${hour}:00<br>
            ${h.main.temp}°C<br>
            ${h.weather[0].description}<br>
            <img src="${getWeatherIcon(h.weather[0].main)}" alt="${h.weather[0].description}">
        </div>
        `;
    }).join("");
}

async function fetchNearbyCities(lat, lon) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}&units=metric&lang=en`);
        const data = await res.json();

        if (data.list.length === 0) {
            nearbyCities.innerHTML = "<p>No nearby cities found.</p>";
            return;
        }

        nearbyCities.innerHTML = "<h3>Nearby Cities</h3>" + data.list.map(city => `
            <div class="nearby-city">
                <h4>${city.name}</h4>
                <p>${city.weather[0].description}</p>
                <p>${city.main.temp}°C</p>
                <img src="${getWeatherIcon(city.weather[0].main)}" alt="${city.weather[0].description}">
            </div>
        `).join("");

    } catch (err) {
        nearbyCities.innerHTML = "<p>Could not fetch nearby cities.</p>";
    }
}

function showError(msg, cityName = "") {
    errorMessage.innerHTML = `
        <div style="text-align:center; padding:20px;">
            <h1>404</h1>
            ${cityName ? `<p>${cityName} could not be found</p>` : ""}
            <p>Please enter a different location.</p>
        </div>
    `;

    todaySummary.innerHTML = "";
    todayHourly.classList.add("hidden");
    forecastDays.innerHTML = "";
    forecastHourly.classList.add("hidden");
    nearbyCities.innerHTML = "";
}

todayHourly.classList.add("hidden");
forecastHourly.classList.add("hidden");
