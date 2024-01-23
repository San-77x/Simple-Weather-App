const apiKey="7d7efe55b63582622e857409758e437f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
// const location = document.getElementById("searchBox");
// const button = document.getElementById("searchButton");

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    // document.querySelector(".cityName").innerHTML = data.name;
    // document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    // document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    // document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
}
checkWeather();

// let button.onclick = () => {
//     if(location.value === "")
//         alert("You Must Type a City name");
//         else { 

// }
// }