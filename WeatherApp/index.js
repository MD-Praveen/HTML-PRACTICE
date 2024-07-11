const apiKey = 'b37ceebcbeab570095f7e6406b35c52a';

let searchName = document.querySelector('#city');
let searchBtn = document.querySelector('#search');
let temp = document.querySelector('#tempDeg');
let Cityname = document.querySelector('#name');
let details = document.querySelector('#remove');

let humidity = document.querySelector('.hvalue');
let wind = document.querySelector('.wvalue');


searchBtn.addEventListener('click',() => {

   if(searchName.value != ""){
        details.style.display = "block"

        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchName.value}&appid=${apiKey}`;
    
        fetch(weatherUrl)
        .then(responce => responce.json())
        .then(data => {
            console.log(data);

            temp.innerText = Math.round(data.main.temp);
            Cityname.innerText = data.name;
            humidity.innerText = data.main.humidity;
            wind.innerText = Math.round(data.wind.speed * 3.6);

        })
        .catch(error => {
            console.error("error in fetch data",error);
        })
    }
    else{
        window.alert('Enter the city name...');
    }
})


