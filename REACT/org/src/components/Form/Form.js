import React from 'react';
import './Form.css';
import Input from '../Input';
import OptionList from '../OptionList';
import Button from '../Button';

const Form = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log('Handling submit', event)
  }

  return (
    <section className='form'>
      <form onSubmit={handleSubmit} >
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input titulo="Nombre" required={true} />
        <Input titulo="Puesto" required />
        <Input titulo="Foto" required />
        <OptionList/>
        <Button>
          Crear
        </Button>
      </form>
    </section>
  )
}

export default Form
