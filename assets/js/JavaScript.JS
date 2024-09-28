const searchFormEl=document.querySelector("#search-form");
const cityNameEl=document.querySelector('#city-name');
const currentWeatherEl=document.querySelector("#current-weather");
const fiveDayEl=document.querySelector("#five-day");
const apiKey='72979675a19cce8d2b57ed1f7ce224a2';


function searchCity(event){
event.preventDefault();
const cityName=cityNameEl.value;
populateCurrentWeather(cityName);
populate5Day(cityName);

}

function populateCurrentWeather(cityName){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

    fetch(url)
    .then(function(response){
       return response.json();
    })
    .then(function(data){
        currentWeatherEl.innerHTML=`<h3>${data.name} (${dayjs.unix(data.dt).format("MM/DD/YYYY")}) <img src="https://openweathermap.org/img/wn/0${data.weather[0].icon}@2x.png" alt=""></h3>
                            <p>Temp: <span>${data.main.temp} °F</span></p>
                            <p>wind: <span>${data.main.temp} MPH</span></p>
                            <p>Humidity: <span>${data.main.temp} %</span></p>
                        </div>` ;

        console.log(data);

    })
}

function populate5Day(cityName){
    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;

fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data)

    fiveDayEl.textContent='';

    for(let i=3; i< data.list.length; i=i+8){
       const forecast=data.list[i]
       console.log(forecast) 
       fiveDayEl.innerHTML +=`<div class="col-sm-2 mb-3 mb-sm-0">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">${dayjs.unix(forecast.dt).format("MM/DD/YYYY")}</h5>
                      <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="">
                      <p>Temp: <span>73 °F</span></p>
                      <p>wind: <span>9 MPH</span></p>
                      <p>Humidity: <span>47%</span></p>
                    </div>
                  </div>
                </div>`
    }
  })
}


searchFormEl.addEventListener('submit', searchCity)

