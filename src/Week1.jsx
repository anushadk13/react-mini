import React from 'react'
import "./style.css"

function Week1() {
    let weatherData = {
        city: "New York",
        temperature: 19,
        date: "Tuesday 10:00",
        description: "Cloudy",
        imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        humidity: 80,
        wind: 10
      };
  return (
    <div className='weather'>
        <form className='mb-3'>
            <div className="row">
                <div className="col-9">
                    <input type = 'search' placeholder = 'type your city name'className='form-control' autoComplete='off'/>
                </div>
                <div className="col-3">
                    <input type = 'submit' value = 'search' className='btn btn-primary w-100' />
                </div>
            </div>
        </form>
        <div className="overview">
            <h1 className='heading'>{weatherData.city}</h1>
            <ul className='update'>
                <li>Last updated : {weatherData.date}</li>
                <li> {weatherData.description}</li>
                <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
            <li><strong>{weatherData.temperature}</strong>
                        <span className='units'>
                            <a href ='/'>°C</a> | <a href ='/'>°F</a>
                        </span></li>
            </ul>
        </div>
        
       <footer>
        <p className='foot'>This project is coded by Anusha and { "  "}
            <a href="https://github.com/anushadk13/react-mini">
                   open sourced.
            </a>
        </p>
       </footer>

    </div>

   
  )
}

export default Week1

