import React from 'react';
import './Input.css';

function Input(props) {

  //console.log('Datos:', props)

  return (
    <div className='text-input'>
      <label>{props.titulo} </label>
      <input placeholder={`Ingresa tu ${props.titulo.toLowerCase()}`} required={props.required} />
    </div>
  )
}

export default Input
