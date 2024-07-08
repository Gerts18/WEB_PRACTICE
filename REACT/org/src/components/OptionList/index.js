import React from 'react'
import './OptionList.css'

const OptionList = (props) => {

  const handleChange = (event) => {
    props.updateValue(event.target.value)
  }

  return (
    <div className='option-list'>
      <label>Equipos</label>
      <select value={props.value} onChange={handleChange} required={props.required}>
        <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
        {props.teams.map( (team, index) => {
            return <option key={index} value={team} > {team} </option>
        })}
      </select>
    </div>
  )
}

export default OptionList
