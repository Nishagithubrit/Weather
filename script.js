const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city) {
    const api_key = "c1cce1f68346f18f7dc9d697ba85ec5e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            alert("City not found! Please enter a valid city name.");
            return;
        }

        const weather_data = await response.json();

        // update UI
        temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
        description.innerHTML = `${weather_data.weather[0].description}`;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;

        // Use OpenWeather icon
        weather_img.src = `https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`;

        console.log(weather_data);
    } catch (error) {
        alert("Something went wrong. Please try again later.");
        console.error(error);
    }
}

searchBtn.addEventListener('click', () => {
    const city = inputBox.value.trim();
    if (city.length < 3) {
        alert("Please enter a valid city name (at least 3 letters).");
        return;
    }
    checkWeather(city);
});

