import {React, useState} from 'react';
import './Input.css';

function Input(props) {
  //console.log('Datos:', props)

  //const [value, setValue] = useState("");

  const handleValue = (event) => {
    props.updateValue(event.target.value);
  }

  return (
    <div className='text-input'>
      <label>{props.titulo} </label>
      <input 
        placeholder={`Ingresa tu ${props.titulo.toLowerCase()}`} 
        required={props.required} 
        value={props.value} 
        onChange={handleValue}
      />
    </div>
  )
}

export default Input
