import styled from "styled-components"
import fav from '../../../../public/iconos/favorito.png'
import favActivo from '../../../../public/iconos/favorito-activo.png'
import expandir from '../../../../public/iconos/expandir.png'
import Button from "../../Button"
import { useContext } from "react"
import { GlobalContext } from "../../../context/GlobalContext"
import useFotoModal from "../../../hooks/useFotoModal"

const Contenedor = styled.figure`
  width: ${props => props.$expandida ? "100%" : '460px'};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;

  & > img{
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px 20px 0 0;
  }

  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 16px 22px;
  }
  h3 {
      font-family: 'GandhiSansRegular';
      font-size: 18px;
      font-weight: lighter ;
  }
  h4 {
    font-family: 'GandhiSansBold';
      flex-grow: 1;
      font-size: 20px;
  }
  h3,
  h4 {
      margin: 0;
  }
`

const SubContenedor = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
`


const ImageCard = (props) => {

  const { titulo, fuente, path} = props.foto

  const {expandida = false} = props

  const iconoFavorito = props.foto.favorita ? favActivo : fav

  const {dispatch} = useContext(GlobalContext)

  const {abrirModal} = useFotoModal()

  return (
    <Contenedor $expandida = {expandida} >
      <img src={path} alt="" />

      <figcaption>
        <h4>{titulo} </h4>

        <SubContenedor>
          <h3>{fuente} </h3>

          <SubContenedor>
            <Button onClick={() => dispatch({type: 'ALTERNAR_FAVORITO', payload: props.foto})} >
              <img src={iconoFavorito} />
            </Button>

            {
              !expandida && 
              <Button onClick={() => abrirModal(props.foto)} >
                <img src={expandir} />
              </Button>
            }

          </SubContenedor>

        </SubContenedor>

      </figcaption>

    </Contenedor>
  )
}

export default ImageCard
