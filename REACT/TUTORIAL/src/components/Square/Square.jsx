import React from 'react'
import '../style.css'

const Square = ({value}) => {

    const handleClick = () => {
        console.log('Clic')
    }

  return (
    <>
        <button 
        className='square'
        onClick={handleClick}
      >
        {value}
      </button>
    </>
  )
}

export default Square
