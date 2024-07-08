import {React} from 'react';
import './Input.css';

function Input(props) {
  //const [value, setValue] = useState("");

  //Desestructuracion 
  const {titulo, required, value, type = 'text'} = props

  const handleValue = (event) => {
    props.updateValue(event.target.value);
  }

  return (
    <div className={`input ${type}-input`}>
      <label>{titulo} </label>
      <input 
        placeholder={`Ingresa tu ${titulo.toLowerCase()}`} 
        required={required} 
        value={value} 
        onChange={handleValue}
        type={type}
      />
    </div>
  )
}

export default Input
