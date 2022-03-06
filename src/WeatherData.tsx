import { FC } from 'react'

export const WeatherData: FC = () => {
    return (
        <div className='data-container'>
            <div className='line'>
                <p className='description'>Temperature</p>
                <p className='unit'>
                    <span className='temp-number'></span>
                    <span className='temp-degrees'>o</span>
                    <span className='temp-scale'></span>
                </p>
            </div>
            <div className='line'>
                <p className='description'>Wind speed</p>
                <p className='unit'>
                    <span className='wind-number'></span>
                    <span className='wind-unit'></span>
                    <span className='wind-hour'>/ hour</span>
                </p>
            </div>
            <div className='line'>
                <p className='description'>Pressure</p>
                <p className='unit'>
                    <span className='pressure-number'></span>
                    <span className='pressure-unit'></span>
                </p>

            </div>
        </div>
    )
}