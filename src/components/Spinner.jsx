import React from 'react'
import Spinner from '../assets/spinner.gif'

const Spinner = () => {
    return (
        <>
            <img className='w-[200px] m-auto block' src={Spinner} alt='loading' />
        </>
    )
}

export default Spinner