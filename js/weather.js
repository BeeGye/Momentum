const API_KEY = "3fb32d16d98869d72d65760b1720e238";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((responce) => responce.json())
    .then((data) => {
      const weather = document.querySelector("#weather div span:nth-child(1)");
      const city = document.querySelector("#weather div span:nth-child(2)");
      const temp = document.querySelector("#weather div span:nth-child(3)");
      const feelsTemp = document.querySelector(
        "#weather div span:nth-child(4)"
      );
      const humidity = document.querySelector("#weather div span:nth-child(5)");
      city.innerText = `Area: ${data.name}`;
      weather.innerText = `Condition: ${data.weather[0].main}`;
      temp.innerText = `Temperature: ${data.main.temp} °C`;
      feelsTemp.innerText = `Feels Like: ${data.main.feels_like} °C`;
      humidity.innerText = `Humidity: ${data.main.humidity}%`;
    });
}

function onGeoError() {
  const errorText = document.querySelector("#weather h2");
  const errorSteps = document.querySelector("#weather h3");
  errorText.classList.remove("hidden");
  errorSteps.classList.remove("hidden");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
