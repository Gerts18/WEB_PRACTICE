import React from 'react'
import Square from '../Square/Square'
import '../style.css'


const Board = () => {

  return (
    <>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>

    </>
    
  )
}

export default Board
