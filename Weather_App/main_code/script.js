
const apiKey = '2ced7179bd5e4e31a62151925240306';
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
const search_bar = document.querySelector('#search-bar');
const search_button = document.querySelector('#search-button');

async function checkWeather(city) {
  try {
    const response = await fetch(`${apiUrl}${city}`);
    
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    console.log(data);

    document.querySelector('#weather-temperature').innerHTML = Math.round(data.current.temp_c);
    document.querySelector('#city-name').innerHTML = data.location.name;
    document.querySelector('#humidity-parcentage').innerHTML = data.current.humidity;
    document.querySelector('#wind-speed').innerHTML = data.current.wind_kph;
    document.querySelector('#weather-img').src = data.current.condition.icon;
  } catch (error) {
    alert("You entered a wrong city name. Please try again.");
    search_bar.value = '';
  }
}

search_button.addEventListener("click", function(){
  checkWeather(search_bar.value);
});

