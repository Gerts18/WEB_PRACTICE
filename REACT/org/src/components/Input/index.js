import React from 'react';
import './Input.css';

function Input(props) {
  return (
    <div className='text-input'>
      <label>{props.titulo} </label>
      <input placeholder={`Ingresa tu ${props.titulo.toLowerCase()}`} />
    </div>
  )
}

export default Input
