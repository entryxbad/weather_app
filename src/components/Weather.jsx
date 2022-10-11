import React from 'react'

const Weather = ({ data }) => {
    console.log(data)
    return (
        <>
            <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90px] m-auto p-4 text-gray-300 z-10'>
                {/* Top */}
                <div className='relative flex justify-between pt-12'>
                    <div className='flex flex-col items-center'>
                        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="/" />
                        <p className='text-2xl'>{data.weather[0].main}</p>
                    </div>
                    <p className='text-9xl'>{data.main.temp.toFixed(0)}°C</p>
                </div>
            </div>
            {/* Bottom */}
            <div>

            </div>
        </>
    )
}

export default Weather