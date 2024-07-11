import styled from 'styled-components'
import banner from '../../assets/banner.png'


const FigureEstilizada  = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`

const Titulo = styled.h1`
    color: #FFF;
    font-size: 40px;
    font-weight: 400;
    max-width: 300px;
    padding: 0 64px;
    line-height: 48px;
`

const Banner = () => {
  return (
    <FigureEstilizada $backgroundImage = {banner} >
      <Titulo>La galería mas completa del espacio</Titulo>
    </FigureEstilizada >
  )
}

export default Banner
