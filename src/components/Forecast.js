import React, { useState } from "react";


const Forecast = ({ data }) => {


    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="forecast">

            <h2>7-Day Forecast</h2>
            {data.forecast.forecastday.map((item, index) => (
                <div key={index} className="forecast-item" onClick={() => handleExpand(index)}>
                    <h3>
                        {new Date(item.date_epoch * 1000).toLocaleDateString()}
                    </h3>
                    {/* <p>{item.day.condition.text}</p> */}
                    <img src={item.day.condition.icon}></img>
                    <p>L:{Math.round(item.day.mintemp_c)}°C H:{Math.round(item.day.maxtemp_c)}°C</p>
                    <p>Humidity:{item.day.avghumidity}%</p>


                    {expandedIndex === index && (
                        <div className="hourly-forecast">
                            <h4>Hourly Forecast</h4>
                            {item.hour.map((hourlyItem, hourlyIndex) => (
                                <div key={hourlyIndex} className="hourly-item">
                                    <p>{new Date(hourlyItem.time_epoch * 1000).toLocaleTimeString()}</p>
                                    <img src={hourlyItem.condition.icon} alt="hourly weather icon" />
                                    <p>Temp: {Math.round(hourlyItem.temp_c)}°C</p>
                                    <p>Humidity: {hourlyItem.humidity}%</p>

                                </div>
                            ))}
                        </div>
                    )}
                </div>

            ))}
        </div>
    );
};



export default Forecast;