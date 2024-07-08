import React from 'react'
import './Collaborator.css'
import { TiDelete } from "react-icons/ti";

const Collaborator = (props) => {

  const {image, name, occupation, id} = props.data

  const {color, deleteCollab} = props

  const headerColor = {backgroundColor: color }

  return (
    <div className='collaborator'>
      <TiDelete className='delete' onClick={() => deleteCollab(id)}></TiDelete>
      <div className='cardHeader' style={headerColor}>
        <img src={image} alt={name} />
      </div>
      <div className='info'>
        <h4>{name}</h4>
        <h5>{occupation}</h5>
      </div>
    </div>
  )
}

export default Collaborator
