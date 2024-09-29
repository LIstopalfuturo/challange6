const searchFormEl = document.querySelector("#search-form");
const cityNameEl = document.querySelector('#city-name');
const currentWeatherEl = document.querySelector("#current-weather");
const fiveDayEl = document.querySelector("#five-day");
const apiKey = '72979675a19cce8d2b57ed1f7ce224a2';

let cityHistory = JSON.parse(localStorage.getItem('cityHistory')) || [];

// TODO: Get the latest city from localStorage to replace the default value
if (cityHistory.length > 0) {
    populateCurrentWeather(cityHistory[cityHistory.length - 1]);
    populate5Day(cityHistory[cityHistory.length - 1]);
}

function searchCity(event) {
    event.preventDefault();
    const cityName = cityNameEl.value;
    populateCurrentWeather(cityName);
    populate5Day(cityName);

    // TODO: Push city name into an array and save that array into localStorage
    if (!cityHistory.includes(cityName)) {
        cityHistory.push(cityName);
        localStorage.setItem('cityHistory', JSON.stringify(cityHistory));
    }
}

function populateCurrentWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            currentWeatherEl.innerHTML = `
                <h3>${data.name} (${dayjs.unix(data.dt).format("MM/DD/YYYY")}) 
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                </h3>
                <p>Temp: <span>${data.main.temp} °F</span></p>
                <p>Wind: <span>${data.wind.speed} MPH</span></p>
                <p>Humidity: <span>${data.main.humidity} %</span></p>
            `;
            console.log(data);
        })
        .catch(function (error) {
            currentWeatherEl.innerHTML = `<p class="text-danger">City not found!</p>`;
            console.error(error);
        });
}

// TODO: Populate temp, wind, and humidity from forecast API
function populate5Day(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            fiveDayEl.textContent = '';

            for (let i = 3; i < data.list.length; i += 8) {
                const forecast = data.list[i];
                fiveDayEl.innerHTML += `
                    <div class="col-sm-2 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${dayjs.unix(forecast.dt).format("MM/DD/YYYY")}</h5>
                                <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="">
                                <p>Temp: <span>${forecast.main.temp} °F</span></p>
                                <p>Wind: <span>${forecast.wind.speed} MPH</span></p>
                                <p>Humidity: <span>${forecast.main.humidity} %</span></p>
                            </div>
                        </div>
                    </div>
                `;
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}

searchFormEl.addEventListener('submit', searchCity);
