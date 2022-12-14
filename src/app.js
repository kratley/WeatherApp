function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
let apiUrl = `https:api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`;

// "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
