import {React, useState} from 'react';
import './Form.css';
import Input from '../Input';
import OptionList from '../OptionList';
import Button from '../Button';

const Form = (props) => {

  //Collaborator info
  const [name, setName] = useState("");
  const [occupation, setOcupation] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  //Team info
  const [title, setTitle] = useState("")
  const [color, setColor] = useState("")

  //Desestructuracion
  const {registerCollab} = props

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      name,
      occupation,
      image,
      team
    }
    registerCollab(data)
    setName("")
    setOcupation("")
    setImage("")
    setTeam("")
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
      <form onSubmit={handleSubmit} >
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Input 
          titulo="Titulo" 
          required={true} 
          value ={title} 
          updateValue = {setTitle} 
        />
        <Input 
          titulo="Color" 
          required 
          value ={color} 
          updateValue = {setColor} 
        />
        <Button>
          Registrar Equipo
        </Button>
      </form>
    </section>
  )
}

export default Form
