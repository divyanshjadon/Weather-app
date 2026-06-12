document.getElementById('searchButton').addEventListener('click', function() {
    let city = document.getElementById('cityInput').value;
    let apiKey = '463178e32461c7f5da9a20db5202f445';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let result = document.getElementById('weatherresult');
            if (data.cod === "404") {
                document.getElementById('weatherresult').innerHTML = '<p>City not found.</p>';
                return;
            }
            result.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Feels like: ${data.main.feels_like} °C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
        })
        .catch(function () {
            document.getElementById('weatherresult').innerHTML = '<p>City not found. Please try again.</p>';
        });
    });        