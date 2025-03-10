const weatherBox = document.querySelector(`.weather-box`);
const weatherDetails = document.querySelector(`.weather-details`);
const input = document.getElementById(`input`);
const searchIcon = document.getElementById(`search-icon`);
const error404 = document.querySelector('.not-found');
const icon = document.getElementById("icon-desc-wrapper");
const card = document.querySelector('.card');
const locationName = document.querySelector('.location-name');

searchIcon.addEventListener('click', ()=>{
    const apiKey = `98740f4ebc0d63bc0f8ba70090e5a091`;
    if(input.value ===''){
         alert('Please enter  a location');
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`)
    .then(response => response.json()).then(json=> {
        locationName.textContent = json.name;

    
        if(json.cod == '404'){
            error404.style.visibility = "visible";
            weatherBox.style.visibility = 'hidden';
            icon.style.visibility = 'hidden';
            weatherDetails.style.visibility = 'hidden';
            card.style.height = "400px";
            locationName.style.visibility = 'visible';
        }else {
            weatherBox.style.visibility = 'visible';
            weatherDetails.style.visibility = 'visible';
            icon.style.visibility = 'visible';
            error404.style.visibility = 'hidden';
            card.style.height = "550px";
            locationName.style.visibility = 'visible';


            const weatherIcon = document.querySelector('.weather-icon');
            const temperature = document.querySelector('.temperature');
            const description = document.querySelector('.description');
            const humidityInfo = document.querySelector('.humidity-info');
            const windInfo = document.querySelector('.wind-info');

           let  weatherId = json.weather[0].id;
           weatherIcon.textContent = getWeatherIcon();

            temperature.textContent = `${(parseInt(json.main.temp)).toFixed(1)}°C`;
            description.textContent = `${json.weather[0].description}`;
            humidityInfo.innerHTML = `${json.main.humidity}%`;
            windInfo.textContent = `${parseInt(json.wind.speed)}Km/h`

            function getWeatherIcon(){
                switch(true){
                    case(weatherId >= 200 && weatherId < 300):
                         return '⛈️';
                    case(weatherId >= 300 && weatherId < 400):
                         return '🌧️';
                    case(weatherId >= 500 && weatherId < 600):
                         return '🌧️';
                    case(weatherId >= 600 && weatherId < 700):
                         return '🌨️';
                    case(weatherId >= 700 && weatherId < 800):
                         return '🌫️';
                    case(weatherId == 800 ):
                         return '🔆';
                    case(weatherId > 800):
                         return '☁️';
                    default:
                        return "❓";
                }

            }                 
    }
    })
    input.value = '';
})

