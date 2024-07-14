import styled from "styled-components"
import Title from "../Title"
import Tag from "./Tags"
import Popular from "./Popular"
import ImageCard from "./ImageCard"

const GalleryContainer = styled.div`
    display: flex;
`

const FluentSection = styled.section`
    flex-grow: 1;
`

const ImagesContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
`

const Gallery = ({fotos = [], seleccionarFoto, marcarFavorito, consulta}) => {
    return (
        <>
            <Tag/>
            <GalleryContainer>

                <FluentSection>
                    <Title>Navegue por la Galeria</Title>
                    <ImagesContainer>
                        {fotos.filter(foto => {
                            return consulta == '' || foto.titulo.toLowerCase().includes(consulta.toLowerCase())
                        }).
                            map( (foto) => {
                            return <ImageCard 
                                solicitarZoom = {seleccionarFoto}
                                key={foto.id} 
                                foto={foto} 
                                marcarFavorito = {marcarFavorito}
                            />
                        })}
                    </ImagesContainer>
                </FluentSection>

                <Popular/>


            </GalleryContainer>

        </>
    )
}

export default Gallery
