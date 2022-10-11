import axios from 'axios'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Weather from './Weather'

const Home = () => {

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState({})

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`

    const fetchWeather = (e) => {
        e.preventDefault()
        axios.get(url).then((response) => {
            setWeather(response.data)
        })
        setCity('')
    }
    return (
        <>
            <div className='bg-image w-full h-screen bg-no-repeat bg-center bg-cover'>
                {/* overlay */}
                <div className='bg-black/40 absolute top-0 left-0 right-0 bottom-0 h-screen z-[1]'></div>
                {/* search */}
                <div className='relative flex jusify-between items-center max-w-[500px] w-full pt-4 px-4 m-auto text-white z-10'>
                    <form onSubmit={fetchWeather} className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 rounded-2xl'>
                        <div>
                            <input
                                onChange={(e) => setCity(e.target.value)}
                                className='bg-transparent border-none text-white focus:outline-none text-2xl capitalize' type="text" placeholder='Search city' />
                        </div>
                        <button onClick={fetchWeather}><BsSearch size={20} /></button>
                    </form>
                </div>
                {/* weather */}
                {weather.main && <Weather data={weather} />}
            </div>
        </>
    )
}

export default Home