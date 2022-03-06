import { FC, useState } from "react";

import './index.css';

export const Form: FC = () => {
    const [LON, setLon] = useState(52.2297)
    const [LAT, setLat] = useState(21.0122)

    const LON_HANDLER = (e: any) => {
        setLon(e.target.value)
    }

    const LAT_HANDLER = (e: any) => {
        setLat(e.target.value)
    }

    const OPEN_WEATHER_KEY = "16ce5520bd032264b1ac7375550e162d"

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

    return (
            <div className="form-container">
                <form>
                    <input type="number" min="-180.0000" max="180.0000" step="0.0001" placeholder="longitude" onChange={LON_HANDLER} />
                    <input type="number" min="-90.0000" max="90.0000" step="0.0001" placeholder="latitude" onChange={LAT_HANDLER} />
                </form>
                <div className="providers-container">
                    <div className="img-container">
                        <button onClick={fetchOpenWeather}>good weather</button>
                    </div>
                </div>
            </div>
        )
    }