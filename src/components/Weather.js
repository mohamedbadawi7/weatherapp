import React from "react";

const Weather = ({ data }) => {
    
    //Temp
    //console.log(data.current.temp_c);


    //City Name
    //data.location.name




    return (
        <div className="weather">
            <div class="city-title-container">
            <h1 class="city-title city-title-shadow city-title-gradient">{data.location.name}</h1>
            </div>

            <div class="weather-info">
                <img src={data.current.condition.icon}></img>
                <div class="temprature">{Math.round(data.current.temp_c)}°C</div>
                <div class="description">{data.current.condition.text}</div>
            </div>
            
            {/* <img src={data.current.condition.icon}></img>
            <h3>{Math.round(data.current.temp_c)}°C</h3>
            <h3>{data.current.condition.text}</h3> */}
        </div>
    );
};


export default Weather;