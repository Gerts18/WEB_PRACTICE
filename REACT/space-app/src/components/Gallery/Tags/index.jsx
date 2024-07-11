import { useState } from 'react'
import tags from './tags.json'
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  margin-top: 56px;
  margin-bottom: 34px;
`

const BotonEstilizado = styled.button`
  padding: 10px 8px;
  border-radius: 10px;
  border: ${props => props.$active ? "2px solid#C98CF1" : "none" };
  background: rgba(217, 217, 217, 0.30);
  color: #FFF;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  max-height: 52px;
  max-width: 117px;

  cursor: pointer;
`

const ParrafoEstilizado = styled.p`
  color: #D9D9D9;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
`

const Tag = () => {

  const [tagsList, setTagsList] = useState(tags)

  const handleActiveTag = (id) => {
    const newTagList = tagsList.map( (tag) =>{
        if(tag.id === id){
          tag.activo = true
        }else{
          tag.activo = false
        }
        return tag
    } )
    setTagsList(newTagList)
  }

  return (
    <Container>
      <ParrafoEstilizado> Buscar por tags: </ParrafoEstilizado>
      {
        tagsList.map( (tag) => {
            return <BotonEstilizado
                     key={tag.id} 
                     $active={tag.activo} 
                     onClick={() => handleActiveTag(tag.id)} > 
                      {tag.titulo} 
                    </BotonEstilizado>
        } )
      }
    </Container>
  )
}

export default Tag
