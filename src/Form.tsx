import { FC, useState } from "react";

import './index.css';

export const Form: FC = () => {
    const [LAT, setLat] = useState(52.2297)
    const [LON, setLon] = useState(21.0122)
    

    const LON_HANDLER = (e: any) => {
        setLon(e.target.value)
    }

    const LAT_HANDLER = (e: any) => {
        setLat(e.target.value)
    }

    const OPEN_WEATHER_KEY = "16ce5520bd032264b1ac7375550e162d"
    const VISUAL_CROSSING_KEY = "733QT6TG43YBN3HJCYTAQEQTY"

    function fetchOpenWeather() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${OPEN_WEATHER_KEY}`)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(weatherData => {
                // @ts-ignore
                const dataToDisplay = weatherData.main.map(data => {
                    return {
                        temp: data.temp,
                        feelsLike: data.feels_like,
                        pressure: data.pressure,
                        humidity: data.humidity
                    }
                })
            })
    }

    function fetchVisualCrossing() {
        // fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/38.9697,-77.385?key=${VISUAL_CROSSING_KEY}`)
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${LAT},${LON}?key=${VISUAL_CROSSING_KEY}`)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(weatherData => {
                // @ts-ignore
                const dataToDisplay = weatherData.main.map(data => {
                    return {
                        temp: data.temp,
                        feelsLike: data.feels_like,
                        pressure: data.pressure,
                        humidity: data.humidity
                    }
                })
            })
    }

    // elements=temp,feelslike,pressure,humidity

    return (
        <div className="form-container">
            <form>
                <input type="number" min="-90.0000" max="90.0000" step="0.0001" placeholder="latitude" onChange={LAT_HANDLER} />
                <input type="number" min="-180.0000" max="180.0000" step="0.0001" placeholder="longitude" onChange={LON_HANDLER} />
            </form>
            <div className="providers-container">
                <div className="img-container">
                    <button onClick={fetchOpenWeather}>OpenWeather</button>
                    <button onClick={fetchVisualCrossing}>VisualCrossing</button>
                </div>
            </div>
        </div>
    )
}