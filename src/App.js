import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import Search from './components/Search';
import Forecast from './components/Forecast';
import './App.css';

const App = () => {

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('');

  const fetchWeatherByCity = async (city) => {

    const apiKey = '77c96f83c47a4698b8d202315241407';
    try {

      // const weatherResponse = await axios.get('http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no');
      // setWeather(weatherResponse.data);
      // const forecastResponse = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric');
      // setForecast(forecastResponse.data.list);

      const current = await axios.get('http://api.weatherapi.com/v1/current.json', {
          params: {
            key: apiKey,
            q: city,
            aqi: 'no'
          }
        });

        const forecast = await axios.get('http://api.weatherapi.com/v1/forecast.json', {
          params: {
            key: apiKey,
            q: city,
            days: 7,
            aqi: 'no',
            alerts: 'no'
          }
        });

        setWeather(current.data)
        setForecast(forecast.data)

    } catch (error) {
      console.error("Error fetching weather data:", error)
    }


  };

  useEffect(() => {

    fetchWeatherByCity('New York');
  }, []);


  return (

    <div className='App'>
      <header>
        <div class="title-container">
          <h1 class="title title-shadow title gradient">Weather App</h1>
        </div>
      </header>
      <Search fetchWeatherByCity={fetchWeatherByCity} setCity={setCity} />
      {weather && <Weather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );

};

export default App;