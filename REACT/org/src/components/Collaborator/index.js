import React from 'react'
import './Collaborator.css'
import { TiDelete} from "react-icons/ti";
import { IoIosHeartEmpty as HeartEmpty, IoIosHeart as HeartFull } from "react-icons/io";

const Collaborator = (props) => {

  const {image, name, occupation, id, fav} = props.data

  const {color, deleteCollab, like} = props

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
        {fav ? <HeartFull color='red' onClick={()=> like(id)}/> : <HeartEmpty onClick={()=> like(id)}/> }
      </div>
    </div>
  )
}

export default Collaborator
