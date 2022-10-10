import React from 'react'

const Weather = ({ data }) => {
    console.log(data)
    return (
        <>
            <div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="/" />
                </div>
            </div>
        </>
    )
}

export default Weather