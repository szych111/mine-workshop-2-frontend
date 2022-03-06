import { FC, useState } from "react";

import './index.css';

export const Form: FC = () => {
    const [films, setFilms] = useState([])
    const [lon, setLon] = useState(52.2297)
    const [lat, setLat] = useState(21.0122)

    const LON_HANDLER = (e: any) => {
        setLon(e.target.value)
    }

    const LAT_HANDLER = (e: any) => {
        setLat(e.target.value)
    }

    const OPEN_WEATHER_KEY = "445e30376f978de083490ba962111ce5"

    const FETCH_OPEN_WEATHER = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}`)
        .then(response => {return response.json()})
        .then(newData => console.log(newData.main))
    //     .then(data => {
    //         // @ts-ignore
    //         const transformedFilms = data.results.map(filmsData => {
    //             return {
    //                 id: filmsData.episode_id,
    //                 title: filmsData.title,
    //                 openingText: filmsData.opening_crawl,
    //                 releaseDate: filmsData.release_date
    //             }
    //         })
    //         setFilms(data.results)})
    //         console.log(films)
    }

    return (
        <div className="form-container">
            <form>
                <input type="number" min="-180.0000" max="180.0000" step="0.0001" placeholder="longitude" onChange={LON_HANDLER} />
                <input type="number" min="-90.0000" max="90.0000" step="0.0001" placeholder="latitude" onChange={LAT_HANDLER} />
            </form>
            <div className="providers-container">
                <div className="img-container">
                <button onClick={FETCH_OPEN_WEATHER}>good weather</button>
                </div>
            </div>
        </div>
    )
}