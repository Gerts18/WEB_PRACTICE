import React from 'react'
import './OptionList.css'

const OptionList = () => {

    //Map method 
    const teams = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y  Gestión"
    ]

  return (
    <div className='option-list'>
      <label>Equipos</label>
      <select>
        {teams.map( (team, index) => {
            return <option key={index}> {team} </option>
        })}
      </select>
    </div>
  )
}

export default OptionList
