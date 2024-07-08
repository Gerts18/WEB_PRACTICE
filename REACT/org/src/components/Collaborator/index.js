import React from 'react'
import './Collaborator.css'

const Collaborator = (props) => {

  const {image, name, occupation} = props.data

  const headerColor = {backgroundColor: props.color }

  return (
    <div className='collaborator'>
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
