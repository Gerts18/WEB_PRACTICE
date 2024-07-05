import React from 'react';
import './Form.css';
import Input from '../Input';
import OptionList from '../OptionList';

const Form = () => {
  return (
    <section className='form'>
      <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input titulo="Nombre" />
        <Input titulo="Puesto" />
        <Input titulo="Foto" />
        <OptionList/>
      </form>
    </section>
  )
}

export default Form
