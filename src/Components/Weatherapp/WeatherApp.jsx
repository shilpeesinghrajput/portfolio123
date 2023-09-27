import React, { useState } from 'react'
import "./WeatherApp.css"
import search_icon from "../../assets/Assets/search.png"
import clear_icon from "../../assets/Assets/clear.png" 
import cloud_icon from "../../assets/Assets/cloud.png";
import drizzle_icon from "../../assets/Assets/drizzle.png"; 
import rain_icon from "../../assets/Assets/rain.png"; 
import snow_icon from "../../assets/Assets/snow.png" 
import wind_icon from "../../assets/Assets/wind.png" 
import humidity_icon from "../../assets/Assets/humidity.png";
const WeatherApp = () => {

     const [wicon,setWicon]=useState(cloud_icon)

     let api_key="d4301613948a93a4ccf7abf442f4b9ea";
    
     const search = async()=>{
          const element = document.getElementsByClassName("cityInput")
          if(element[0].value===""){
               return 0 ;
          }
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
let response =await fetch(url)
let data = await response.json()
const humidity= document.getElementsByClassName("humidity-percent");
const wind= document.getElementsByClassName("wind-rate");
const temperature=document.getElementsByClassName("weather-temp");
const location =document.getElementsByClassName("weather-location");
const icon = document.getElementById("wIcon");
// let icon_key= `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

if(data.weather[0].icon ==='01d'|| data.weather[0].icon ==='01n'){
     setWicon(clear_icon)
}else if(data.weather[0].icon ==='02d'|| data.weather[0].icon ==='02n'){
     setWicon(cloud_icon)
}else if(data.weather[0].icon ==='03d'|| data.weather[0].icon ==='03n'){
     setWicon(drizzle_icon)
}else if(data.weather[0].icon ==='04d'|| data.weather[0].icon ==='04n'){
     setWicon(drizzle_icon)
}else if(data.weather[0].icon ==='09d'|| data.weather[0].icon ==='09n'){
     setWicon(rain_icon)
}else if(data.weather[0].icon ==='10d'|| data.weather[0].icon ==='10n'){
     setWicon(rain_icon)
}else if(data.weather[0].icon ==='13d'|| data.weather[0].icon ==='13n'){
     setWicon(snow_icon)
}else{
     setWicon(clear_icon)
}


humidity[0].innerHTML=data.main.humidity+"%";
wind[0].innerHTML=data.wind.speed +"km/h";
temperature[0].innerHTML=data.main.temp +"°c";
location[0].innerHTML= data.name;
// icon.src= icon_key;
console.log(data)

     }
  return (
          <div className='container'>
          <div className="top-bar">
           <input type="text" className="cityInput" placeholder="search"/>
           <div className="search-icon" onClick={()=>{search()}}>
              <img src={search_icon} alt="" />
           </div>
          </div>

          <div className="weather-image"> 
 <img id='wIcon' src={wicon} alt="" />
</div>
<div className="weather-temp">24°c</div>
<div className="weather-location">London</div> 
<div className="data-container">
<div className="element">
    <img src={humidity_icon} alt="" className="icon"/> 
    <div className="data">
<div className="humidity-percent">64% </div>
<div className="text">Humidity</div>
     </div>
          </div>

          <div className="element">
    <img src={wind_icon} alt="" className="icon"/> 
    <div className="data">
<div className="wind-rate">18 km/h </div>
<div className="text">Wind Speed</div>
     </div>
          </div>
          </div>
          </div>
  )

}

export default WeatherApp
