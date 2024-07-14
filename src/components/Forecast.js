import React from "react";


const Forecast = ({ data }) => {


    console.log(data.forecast.forecastday)

    return (
        <div className="forecast">

            <h2>7-Day Forecast</h2>
            {data.forecast.forecastday.map((item, index) => (
                <div key={index} className="forecast-item">
                    <h3>{new Date(item.date_epoch * 1000).toLocaleDateString()}</h3>
                    {/* <p>{item.day.condition.text}</p> */}
                    <img src={item.day.condition.icon}></img>
                    <p>L:{Math.round(item.day.mintemp_c)}°C H:{Math.round(item.day.maxtemp_c)}°C</p>
                    <p>Humidity:{item.day.avghumidity}</p>
                </div>

            ))}
        </div>
    );
};



export default Forecast;