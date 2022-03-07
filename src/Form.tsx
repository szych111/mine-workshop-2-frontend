import { FC, useState } from "react";

import { WeatherData } from "./WeatherData";
import './index.css';

export const Form: FC = () => {
    const [LAT, setLat] = useState(52.2297)
    const [LON, setLon] = useState(21.0122)
    const [WEATHER_DATA, setWEATHER_DATA] = useState<{
        provider?: string,
        place?: string,
        country?: string,
        temperature?: number,
        feelsLike?: number,
        pressure?: number,
        windSpeed?: number,
    }>({})


    const LON_HANDLER = (e: any) => {
        setLon(e.target.value)
    }

    const LAT_HANDLER = (e: any) => {
        setLat(e.target.value)
    }

    async function fetchOpenWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`)
        const data = await response.json()
        console.log(data)

        setWEATHER_DATA({
            temperature: data.main.temp,
            feelsLike: data.main.feels_like,
            pressure: data.main.pressure,
            windSpeed: data.wind.speed,
            place: data.name,
            country: `${data.sys.country}/`,
            provider: 'OpenWeather'
        })
        console.log(WEATHER_DATA)
    }


    async function fetchVisualCrossing() {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${LAT},${LON}/today?key=${process.env.REACT_APP_VISUAL_CROSSING_KEY}`)
        const data = await response.json()
        console.log(response)

        setWEATHER_DATA({
            temperature: data.currentConditions.temp,
            feelsLike: data.currentConditions.feelslike,
            pressure: data.currentConditions.pressure,
            windSpeed: data.currentConditions.windspeed,
            place: data.timezone,
            provider: 'VisualCrossing'
        })
    }

    return (
        <main>
            <div className="form-container">
                <form>
                    <input type="number" min="-90.0000" max="90.0000" step="0.0001" placeholder="latitude" onChange={LAT_HANDLER} />
                    <input type="number" min="-180.0000" max="180.0000" step="0.0001" placeholder="longitude" onChange={LON_HANDLER} />
                </form>
                <div className="providers-container">
                    <div className="img-container">
                        <button onClick={fetchOpenWeather}>OpenWeather</button>
                        <button onClick={fetchVisualCrossing} >VisualCrossing</button>
                    </div>
                </div>
            </div>
            <div className='data-container'>
                <div className='line'>
                    <p className='description'>Weather Data Provider</p>
                    <p className='unit'>
                        <span className='temp-number'>{WEATHER_DATA.provider}</span>
                    </p>
                </div>
                <div className='line'>
                    <p className='description'>Place</p>
                    <p className='unit'>
                        <span className='temp-number'>{WEATHER_DATA.country}{WEATHER_DATA.place}</span>
                    </p>
                </div>
                <div className='line'>
                    <p className='description'>Temperature</p>
                    <p className='unit'>
                        <span className='temp-number'>{WEATHER_DATA.temperature}</span>
                        <span className='temp-degrees'><sup>o</sup></span>
                        <span className='temp-scale'>F</span>
                    </p>
                </div>
                <div className='line'>
                    <p className='description'>Feels Like</p>
                    <p className='unit'>
                        <span className='wind-number'>{WEATHER_DATA.feelsLike}</span>
                        <span className='temp-degrees'><sup>o</sup></span>
                        <span className='temp-scale'>F</span>
                    </p>
                </div>
                <div className='line'>
                    <p className='description'>Pressure</p>
                    <p className='unit'>
                        <span className='pressure-number'>{WEATHER_DATA.pressure}</span>
                        <span className='pressure-unit'> hPa</span>
                    </p>
                </div>
                <div className='line'>
                    <p className='description'>Wind Speed</p>
                    <p className='unit'>
                        <span className='pressure-number'>{WEATHER_DATA.windSpeed}</span>
                        <span className='wind-unit'> meters</span>
                        <span className='wind-hour'>/sec</span>
                    </p>
                </div>
            </div>
        </main>
    )
}