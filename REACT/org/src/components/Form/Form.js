import React from 'react';
import './Form.css';
import Input from '../Input';

const Form = () => {
  return (
    <section className='form'>
      <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input titulo="Nombre" />
        <Input titulo="Puesto" />
        <Input titulo="Foto" />
      </form>
    </section>
  )
}

export default Form
