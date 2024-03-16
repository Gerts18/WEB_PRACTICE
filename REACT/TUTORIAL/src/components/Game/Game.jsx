import React, { useState } from 'react'
import Board from '../Board/Board'
import '../style.css'

const Game = () => {

    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay (nextSquares){
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove){

    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0){
            description = 'Ir al movimiento #' + move;
        } else {
            description = 'Ir al inicio del juego'
        }
        return (
            <li key={move}>
                <button
                onClick={() => jumpTo(move)}
                >
                {description}
                </button>
            </li>
        )
    }
    )

  return (
    <>
        <div className='game'>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className='game-info'>
                <ol> {moves} </ol>
            </div>
        </div> 
    </>
  )
}

export default Game