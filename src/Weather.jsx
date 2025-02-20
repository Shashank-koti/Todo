import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Weather.css";

export default function Weather({updateInfo}) {
     const[city , setCity] = useState("")
     let URL = "https://api.openweathermap.org/data/2.5/weather";
     let API_KEY = "565af750bd2b940046dc5b44dc0b2f4b";

     let getWeatherInfo = async()=>{
        let responce = await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResonce = await responce.json();
        let result = {
          city: jsonResonce.name,
          feels_like: jsonResonce.main.feels_like,
          humidity: jsonResonce.main.humidity,
          temp:jsonResonce.main.temp,
          temp_max: jsonResonce.main.temp_max,
          temp_min: jsonResonce.main.temp_min,
          weather:jsonResonce.weather[0].description
        }
        return result;
     }

     let inputChange = (event)=>{
      setCity(event.target.value);
      }

    let handleSubmit = async(event)=>{
      event.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    }

  return (
    <div className='container'>
      <h1>Weather Website</h1>
      <TextField id="outlined-basic" label="Enter City Name:" variant="outlined" onChange={inputChange} value={city}/><br /><br />
      <Button variant="contained" onClick={handleSubmit} >Search</Button>
    </div>
  )
}
