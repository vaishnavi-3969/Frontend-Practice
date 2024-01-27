import React from 'react'
import '../App.css'

const Button = () => {
    return (
        <div className='button__outline'>
            <button className='outline' onClick={() => alert("Hi there")}>Click Me</button>
        </div>
    )
}

export default Button