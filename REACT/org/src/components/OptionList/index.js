import React from 'react'
import './OptionList.css'

const OptionList = (props) => {

    //Map method 
  /* const teams = [
      "Programación",
      "Front End",
      "Data Science",
      "Devops",
      "UX y Diseño",
      "Móvil",
      "Innovación y  Gestión"
  ] */

  const handleChange = (event) => {
    props.updateValue(event.target.value)
  }

  return (
    <div className='option-list'>
      <label>Equipos</label>
      <select value={props.value} onChange={handleChange} required={props.required}>
        <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
        {props.teamsList.map( (team, index) => {
            return <option key={index} value={team.title} > {team.title} </option>
        })}
      </select>
    </div>
  )
}

export default OptionList
