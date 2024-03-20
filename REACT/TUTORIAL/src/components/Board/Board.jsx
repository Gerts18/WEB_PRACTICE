import React, { useState } from 'react'
import Square from '../Square/Square'
import '../style.css'


const Board = ({xIsNext, squares, onPlay}) => {
  
  /* const [xIsNext, setXIsNext] = useState(true)

  const [squares, setSquares] = useState(Array(9).fill(null)); */

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    if(squares[i]){
      return;
    }

    const nextSquares = squares.slice();

    if(xIsNext) {
      nextSquares[i] = 'X';
    } else{
      nextSquares[i] = 'O';
    }
    
    onPlay(nextSquares);
  }

  function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }

  const allSquares = (num) => {
    const s = [];
    for (let i = num; i<(num+3); i++){
      s.push(
        <Square key={i} value = {squares[i]} onSquareClick={() => handleClick(i)} />
      )
    }

    return <>{s}</>
    
  }


  return (
    <>
      <h1 className='status'>{status}</h1>
      <div className='board-row'>
        {allSquares(0)}
      </div>
      
      <div className='board-row'>
        {allSquares(3)}
      </div>
      
      <div className='board-row'>
        {allSquares(6)}
      </div>

    </>
    
  )
}

export default Board
