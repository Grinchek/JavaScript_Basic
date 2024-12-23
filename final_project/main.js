const apiKey = "a46c169f9ccaac1d556e20793d962971";
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {

    }
}
function searchOnclickHendler() {
    todayHandler();
};
function todayHandler() {
    const fiveDay = document.getElementById("fiveDay");
    fiveDay.innerHTML = "";
    let cityName = document.getElementById("searchField").value;
    if (cityName === "") {
        cityName = localStorage.getItem("cityName");
        localStorage.removeItem("cityName");
    }


    const urlForDecoding = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;

    fetchData(urlForDecoding).then(decoding => {
        let lon = decoding[0].lon;
        let lat = decoding[0].lat;
        const urlNow = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        fetchData(urlNow).then(forecast => {
            let day = new Date().getMonth() + 1;
            let month = new Date().getDate();
            const errorPage = document.getElementById("errorPage");
            errorPage.innerHTML = "";
            const currentWeather = document.getElementById("current");
            currentWeather.innerHTML = `<div class="header">
                <p class="title">${cityName}</p>
                <p class="input">${month}.${day}</p>
            </div>
            <div class="content">
                <div>
                    <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="" width="60px" height="60px">
                    <p>${forecast.weather[0].description}</p>
                </div>
                <div>
                    <h1 style="color: black;">${Math.round((forecast.main.temp) - 273.1)}</h1>
                    <p>Real feel: ${Math.round((forecast.main.feels_like) - 273.1)
                }</p>
                </div>
                <div>
                    <div class="lightTime">
                        <p>Sunrise: </p>
                        <p>${converUnixTime(forecast.sys.sunrise)}</p>
                    </div>
                    <div class="lightTime">
                        <p>Sunset: </p>
                        <p>${converUnixTime(forecast.sys.sunset)}</p>
                    </div>
                    <div class="lightTime">
                        <p>Duration:</p>
                        <p><p>${duration(forecast.sys.sunrise, forecast.sys.sunset)}</p></p>
                    </div>
                </div>
            </div>`
        })
    }).catch(error => { errorPage() });
    localStorage.setItem("cityName", cityName);
    hourlyForecast(0);
}
function fiveDayHandler() {
    const hourlyWeeather = document.getElementById("hourly");
    hourlyWeeather.innerHTML = "";

    let cityName = document.getElementById("searchField").value;
    if (cityName === "") {
        cityName = localStorage.getItem("cityName");
        localStorage.removeItem("cityName");
    }

    const urlForDecoding = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;
    fetchData(urlForDecoding).then(decoding => {
        let lon = decoding[0].lon;
        let lat = decoding[0].lat;
        const urlfiveDay = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        fetchData(urlfiveDay).then(forecast => {
            console.log(forecast);
            const errorPage = document.getElementById("errorPage");
            errorPage.innerHTML = "";
            const currentWeather = document.getElementById("current");
            currentWeather.innerHTML = `<div class="header">
                <p class="title">${cityName}</p>
            </div>`;
            const fiveDay = document.getElementById("fiveDay");
            fiveDay.innerHTML = `<div class="oneOfFive">
                    <button >
                        <ul style="list-style: none;">
                            <li style="font-size: larger;font-weight: 500;color: rgb(16, 184, 184);">${getDayName(forecast.list[0].dt)}</li>
                            <li>
                                <p>${new Date(forecast.list[0].dt_txt).getDate()}.${new Date(forecast.list[0].dt_txt).getMonth() + 1}</p>
                            </li>
                            <li><img src="https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png" alt="" width="70px" height="70px"></li>
                            <li>
                                <h3 style="color: black;">${Math.round((forecast.list[0].main.temp) - 273.1)}°</h3>
                            </li>
                            <li>
                                <p>Clear,Warm</p>
                            </li>
                        </ul>
                    </button>
                </div>
                <div class="oneOfFive">
                    <button >
                        <ul style="list-style: none;">
                            <li style="font-size: larger;font-weight: 500;color: rgb(16, 184, 184);">${getDayName(forecast.list[9].dt)}</li>
                            <li>
                                <p>${new Date(forecast.list[9].dt_txt).getDate()}.${new Date(forecast.list[9].dt_txt).getMonth() + 1}</p>
                            </li>
                            <li><img src="https://openweathermap.org/img/wn/${forecast.list[8].weather[0].icon}@2x.png" alt="" width="70px" height="70px"></li>
                            <li>
                                <h3 style="color: black;">${Math.round((forecast.list[9].main.temp) - 273.1)}°</h3>
                            </li>
                            <li>
                                <p>Clear,Warm</p>
                            </li>
                        </ul>
                    </button>
                </div>
                <div class="oneOfFive">
                    <button  >
                        <ul style="list-style: none;">
                            <li style="font-size: larger;font-weight: 500;color: rgb(16, 184, 184);">${getDayName(forecast.list[17].dt)}</li>
                            <li>
                                <p>${new Date(forecast.list[17].dt_txt).getDate()}.${new Date(forecast.list[17].dt_txt).getMonth() + 1}</p>
                            </li>
                            <li><img src="https://openweathermap.org/img/wn/${forecast.list[16].weather[0].icon}@2x.png" alt="" width="70px" height="70px"></li>
                            <li>
                                <h3 style="color: black;">${Math.round((forecast.list[16].main.temp) - 273.1)}°</h3>
                            </li>
                            <li>
                                <p>Clear,Warm</p>
                            </li>
                        </ul>
                    </button>
                </div>
                <div class="oneOfFive">
                    <button  >
                        <ul style="list-style: none;">
                            <li style="font-size: larger;font-weight: 500;color: rgb(16, 184, 184);">${getDayName(forecast.list[25].dt)}</li>
                            <li>
                                <p>${new Date(forecast.list[25].dt_txt).getDate()}.${new Date(forecast.list[25].dt_txt).getMonth() + 1}</p>
                            </li>
                            <li><img src="https://openweathermap.org/img/wn/${forecast.list[24].weather[0].icon}@2x.png" alt="" width="70px" height="70px"></li>
                            <li>
                                <h3 style="color: black;">${Math.round((forecast.list[24].main.temp) - 273.1)}°</h3>
                            </li>
                            <li>
                                <p>Clear,Warm</p>
                            </li>
                        </ul>
                    </button>
                </div>
                <div class="oneOfFive">
                    <button >
                        <ul style="list-style: none;">
                            <li style="font-size: larger;font-weight: 500;color: rgb(16, 184, 184);">${getDayName(forecast.list[33].dt)}</li>
                            <li>
                                <p>${new Date(forecast.list[33].dt_txt).getDate()}.${new Date(forecast.list[33].dt_txt).getMonth() + 1}</p>
                            </li>
                            <li><img src="https://openweathermap.org/img/wn/${forecast.list[32].weather[0].icon}@2x.png" alt="" width="70px" height="70px"></li>
                            <li>
                                <h3 style="color: black;">${Math.round((forecast.list[32].main.temp) - 273.1)}°</h3>
                            </li>
                            <li>
                                <p>Clear,Warm</p>
                            </li>
                        </ul>
                    </button>
                </div>`


        })

    }).catch(error => {
        errorPage();
    });
    localStorage.setItem("cityName", cityName);


}
function hourlyForecast(id) {
    let cityName = document.getElementById("searchField").value;
    if (cityName === "") {
        cityName = localStorage.getItem("cityName");
        localStorage.removeItem("cityName");
    }
    const urlForDecoding = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;
    fetchData(urlForDecoding).then(decoding => {
        let lon = decoding[0].lon;
        let lat = decoding[0].lat;
        const urlfiveDay = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        fetchData(urlfiveDay).then(forecast => {
            console.log(forecast);
            console.log(forecast.list);
            const hourlyWeeather = document.getElementById("hourly");
            hourlyWeeather.innerHTML = ` 
            <div class="header">
                <p class="title">HOURLY</p>
            </div>
            <div>
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th>${new Date(forecast.list[0 + id].dt_txt).getDate()}.${new Date(forecast.list[0 + id].dt_txt).getMonth() + 1}</th>
                            <th>${converUnixTime(forecast.list[0 + id].dt)}</th>
                            <th>${converUnixTime(forecast.list[1 + id].dt)}</th>
                            <th>${converUnixTime(forecast.list[2 + id].dt)}</th>
                            <th>${converUnixTime(forecast.list[3 + id].dt)}</th>
                            <th>${converUnixTime(forecast.list[4 + id].dt)}</th>
                            <th>${converUnixTime(forecast.list[5 + id].dt)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><img src="https://openweathermap.org/img/wn/${forecast.list[0 + id].weather[0].icon}@2x.png" alt="" width="50px" height="50px"></td>
                            <td><img src="https://openweathermap.org/img/wn/${forecast.list[1 + id].weather[0].icon}@2x.png" alt="" width="50px" height="50px"></td>
                            <td><img src="https://openweathermap.org/img/wn/${forecast.list[2 + id].weather[0].icon}@2x.png" alt="" width="50px" height="50px"></td>
                            <td><img src="https://openweathermap.org/img/wn/${forecast.list[3 + id].weather[0].icon}@2x.png" alt="" width="50px" height="50px"></td>
                            <td><img src="https://openweathermap.org/img/wn/${forecast.list[4 + id].weather[0].icon}@2x.png" alt="" width="50px" height="50px"></td>
                            <td><img src="https://openweathermap.org/img/wn/${forecast.list[5 + id].weather[0].icon}@2x.png" alt="" width="50px" height="50px"></td>
                        </tr>
                        <tr>
                            <td>Forecast</td>
                            <td>${forecast.list[0 + id].weather[0].description}</td>
                            <td>${forecast.list[1 + id].weather[0].description}</td>
                            <td>${forecast.list[2 + id].weather[0].description}</td>
                            <td>${forecast.list[3 + id].weather[0].description}</td>
                            <td>${forecast.list[4 + id].weather[0].description}</td>
                            <td>${forecast.list[5 + id].weather[0].description}</td>
                        </tr>
                        <tr>
                            <td>Temp (°C)</td>
                            <td>${Math.round((forecast.list[0 + id].main.temp) - 273.1)}°</td>
                            <td>${Math.round((forecast.list[1 + id].main.temp) - 273.1)}°</td>
                            <td>${Math.round((forecast.list[2 + id].main.temp) - 273.1)}°</td>
                            <td>${Math.round((forecast.list[3 + id].main.temp) - 273.1)}°</td>
                            <td>${Math.round((forecast.list[4 + id].main.temp) - 273.1)}°</td>
                            <td>${Math.round((forecast.list[5 + id].main.temp) - 273.1)}°</td>
                        </tr>
                        <tr>
                            <td>RealFeel</td>
                            <td>${Math.round((forecast.list[0 + id].main.feels_like) - 273.1)}°</td>
                            <td>${Math.round((forecast.list[1 + id].main.feels_like) - 273.1)}°</td>
                            <td>${Math.round((forecast.list[2 + id].main.feels_like) - 273.1)}°</td>
                            <td>${Math.round((forecast.list[3 + id].main.feels_like) - 273.1)}°</td>
                            <td>${Math.round((forecast.list[4 + id].main.feels_like) - 273.1)}°</td>
                            <td>${Math.round((forecast.list[5 + id].main.feels_like) - 273.1)}°</td>
                        </tr>
                        <tr>
                            <td>Wind (km/h)</td>
                            <td>${forecast.list[0 + id].wind.speed}</td>
                            <td>${forecast.list[1 + id].wind.speed}</td>
                            <td>${forecast.list[2 + id].wind.speed}</td>
                            <td>${forecast.list[3 + id].wind.speed}</td>
                            <td>${forecast.list[4 + id].wind.speed}</td>
                            <td>${forecast.list[5 + id].wind.speed}</td>
                        </tr>
                    </tbody>
                </table>
            </div>`
        })
    });
    localStorage.setItem("cityName", cityName);

}

function converUnixTime(unixTime) {
    const timeUnix = unixTime;
    const unixDate = new Date(timeUnix * 1000);
    const normalTime = unixDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
    return normalTime;
}
function duration(sunrise, sunset) {
    const durationSeconds = (sunset - sunrise);
    const durationHours = Math.floor(durationSeconds / 3600);
    const durationMinutes = Math.floor((durationSeconds % 3600) / 60);
    return `${durationHours}:${durationMinutes}`;

}

function getDayName(unixTime) {
    const date = new Date(unixTime * 1000);

    const shortDayName = date.toLocaleDateString("en-US", { weekday: "short" });
    return shortDayName;
}
function errorPage() {
    const current = document.getElementById("current");
    current.innerHTML = "";
    const hourlyWeeather = document.getElementById("hourly");
    hourlyWeeather.innerHTML = "";
    const fiveDay = document.getElementById("fiveDay");
    fiveDay.innerHTML = "";
    const errorPage = document.getElementById("errorPage");
    errorPage.innerHTML = ` <div><img src="/final_project/images/404.png" alt="" width="300px" height="250px"></div>
    <div>
        <p>Not found</p>
    </div> `

}


