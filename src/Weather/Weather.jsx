import axios from "axios";
import { useEffect, useState } from "react";

import './Weather.scss'

function Weather() {

    const[weatherData,setWeatherData]=useState({});

    let latitude = weatherData?.latitude;
    let longitude = weatherData?.longitude;
    let resolvedAddress = weatherData?.resolvedAddress;
    let description = weatherData?.description;

    let currentConditionsDatetime = weatherData?.currentConditions?.datetime;
    let currentConditionsTemp = weatherData?.currentConditions?.temp;
    let currentConditionsFeelsLike = weatherData?.currentConditions?.feelslike;
    let currentConditionsHumidity = weatherData?.currentConditions?.humidity;

    let dayTempMax, dayTempMin;

    weatherData.days?.forEach(day => {
        dayTempMax = day.tempmax;
        dayTempMin = day.tempmin;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/hyderabad?unitGroup=us&key=ANWBET87272D2ZP6HK3DA9MCX&contentType=json")
                .then((response) => {
                    setWeatherData(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, 1800000); // Fetches data every second
    
        // Clear interval on component unmount
        return () => {
            clearInterval(interval);
            console.log(weatherData);
        };
    }, []);
    

    function handleClick(){
        console.log(weatherData);
    }

    return ( 
        <div className="weather-root">
            <div className="weather-data">
                <div className="data-pill"><span>Latitude: {latitude}, Longitude:{longitude}</span></div>
                <div className="data-pill"><span>Location: {resolvedAddress}</span></div>
                <div className="data-pill"><span>Time: {currentConditionsDatetime}</span></div>
                <div className="data-pill"><span>Current Tempereature: {parseInt((5/9)*(currentConditionsTemp-32))}° C</span></div>
                <div className="data-pill"><span>Current Humidity: {currentConditionsHumidity}° F</span></div>
                <div className="data-pill"><span>Feels Like: {parseInt((5/9)*(currentConditionsFeelsLike-32))}° C</span></div>
                <div className="data-pill"><span>{description}</span></div>
                <div className="data-pill"><span>Today Highest Tempereature:{dayTempMax}</span></div>
                <div className="data-pill"><span>Today Lowest Tempereature:{dayTempMin}</span></div>
            </div>
        </div>
     );
}

export default Weather;