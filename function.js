async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '3c857917249aa67deefed4d98ad0ba37';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    // https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        displayWeather(data);
      } else {
        alert('City not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Description: ${data.weather[0].description}</p>
    `;
  }
  