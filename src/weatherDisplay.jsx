import { useState } from "react";
import Weather from "./Weather.jsx";
import WeatherForm from "./WeatherForm.jsx";

let style = {
  backgroundColor: "#f2f2f2",
  padding: "5px",

}

export default function WeatherDisplay() {
  const [weatherInfo , setWeatherInfo] = useState({
    city:"wanderland",
    feels_like: 15.85,
    humidity: 82,
    temp:16.05,
    temp_max: 16.05,
    temp_min: 16.05,
    weather:"haze"
  });

  let updateInfo = (result)=>{
    setWeatherInfo(result);
    console.log(result);
  }

  return (
    <div style={style}>
      <Weather updateInfo={updateInfo}/>
      <WeatherForm info={weatherInfo}/>
    </div>
  )
}
