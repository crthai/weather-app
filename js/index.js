const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    cityElement.innerHTML = data.name;
    tempElement.innerHTML = Math.round(data.main.temp) + "°C";
    humidityElement.innerHTML = data.main.humidity + "%";
    windElement.innerHTML = data.wind.speed + "km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "./images/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "./images/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "./images/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "./images/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "./images/mist.png";
        break;
      default:
        break;
    }
  } catch (error) {
    console.error("Error fetching weather data: ", error);
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
