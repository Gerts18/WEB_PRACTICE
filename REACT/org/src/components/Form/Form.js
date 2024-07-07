import {React, useState} from 'react';
import './Form.css';
import Input from '../Input';
import OptionList from '../OptionList';
import Button from '../Button';

const Form = (props) => {

  const [name, setName] = useState("");
  const [occupation, setOcupation] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      name,
      occupation,
      image,
      team
    }
    
    console.log(data)
  }

  return (
    <section className='form'>
      <form onSubmit={handleSubmit} >
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input 
          titulo="Nombre" 
          required={true} 
          value ={name} 
          updateValue = {setName} 
        />
        <Input 
          titulo="Puesto" 
          required 
          value ={occupation} 
          updateValue = {setOcupation} 
        />
        <Input  
          titulo="Foto" 
          required 
          value ={image} 
          updateValue = {setImage} 
        />
        <OptionList
          teams = {props.teams}
          value = {team}
          updateValue = {setTeam}
          required
        />
        <Button>
          Crear
        </Button>
      </form>
    </section>
  )
}

export default Form
