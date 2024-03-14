import React from 'react'
import Board from '../Board/Board'
import '../style.css'

const Game = () => {
  return (
    <>
        <div className='game'>
            <div className='game-board'>
                <Board/>
            </div>
            <div className='game-info'>
                <ol> {} </ol>
            </div>
        </div> 
    </>
  )
}

export default Game
