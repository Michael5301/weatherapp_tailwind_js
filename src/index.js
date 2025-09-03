


const apiKey = "1e777de4dcfb9942c24f54bc6d9f4c62";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector('.weatherForm input');
const searchbtn = document.querySelector('.weatherForm button');
const weatherImage = document.querySelector('.weatherImage');


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weatherInfoCard').style.display = 'none';
    } else {


        var data = await response.json();

        console.log(data);


        document.getElementById('cityName').innerHTML = data.name;
        document.getElementById('temperature').innerHTML = Math.round(data.main.temp) + '°C';
        document.getElementById('humidity').innerHTML = data.main.humidity + '%';
        document.getElementById('wind').innerHTML = data.wind.speed + 'km/h';

        if (data.weather[0].main == 'Clouds') { weatherImage.src = '/images/clouds.png' }
        else if (data.weather[0].main == 'Drizzle') { weatherImage.src = '/images/drizzle.png' }
        else if (data.weather[0].main == 'Rain') { weatherImage.src = '/images/rain.png' }
        else if (data.weather[0].main == 'Snow') { weatherImage.src = '/images/snow.png' }
        else if (data.weather[0].main == 'Wind') { weatherImage.src = '/images/wind.png' }
        else if (data.weather[0].main == 'Mist') { weatherImage.src = '/images/mist.png' }
        else if (data.weather[0].main == 'Humidity') { weatherImage.src = '/images/humidity.png' }

        document.querySelector('.weatherInfoCard').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weatherInfoCard').classList.remove('hidden');
    }


}

searchbtn.addEventListener('click', () => {
    checkWeather(searchbox.value);
});

