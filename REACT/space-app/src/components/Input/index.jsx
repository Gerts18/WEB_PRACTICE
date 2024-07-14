import styled from "styled-components"
import search from '/imagenes/search.png'

const ContainerEstilizado  = styled.div`
    position: relative;
    display: inline-block;
`

const InputEstilizado = styled.input`
    border: 2px solid var(--Degradado-co-rosa, #C98CF1);
    border-radius: 10px;
    background: transparent;
    padding: 12px 16px;
    width: 566px;
    height: 56px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;

`

const IconoLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const Input = ({setConsulta}) => {
  return (
    <ContainerEstilizado>
        <InputEstilizado 
          type="text" 
          placeholder="¿Qué estas buscando?" 
          onChange={(e) => {setConsulta(e.target.value)}} 
        />
        <IconoLupa src={search} alt="icono de busqueda" />
    </ContainerEstilizado>
  )
}

export default Input
