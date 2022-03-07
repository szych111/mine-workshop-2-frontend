import { FC } from 'react'

interface weatherData {
    temp: number;
    feelsLike: number;
    pressure: number;
    humidity: string | number
}

export const WeatherData: FC<weatherData> = ({temp, feelsLike, pressure, humidity}) => {
    return (
        <div className='data-container'>
            <div className='line'>
                <p className='description'>Temperature</p>
                <p className='unit'>
                    <span className='temp-number'>{temp}</span>
                    <span className='temp-degrees'>o</span>
                    <span className='temp-scale'></span>
                </p>
            </div>
            <div className='line'>
                <p className='description'>Wind speed</p>
                <p className='unit'>
                    <span className='wind-number'>{feelsLike}</span>
                    <span className='wind-unit'></span>
                    <span className='wind-hour'>/ hour</span>
                </p>
            </div>
            <div className='line'>
                <p className='description'>Pressure</p>
                <p className='unit'>
                    <span className='pressure-number'>{pressure}</span>
                    <span className='pressure-unit'></span>
                </p>
            </div>
            <div className='line'>
                <p className='description'>Humidity</p>
                <p className='unit'>
                    <span className='pressure-number'>{humidity}</span>
                    <span className='pressure-unit'></span>
                </p>
            </div>
        </div>
    )
}