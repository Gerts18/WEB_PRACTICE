import styled from "styled-components"
import Title from "../Title"
import Tag from "./Tags"
import Popular from "./Popular"
import ImageCard from "./ImageCard"
import Title from "../Title"

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
    fotosGaleria.length == 0 ? <Title>Cargando ...</Title> :
    return (
        <>
            <Tag/>
            <GalleryContainer>

                <FluentSection>
                    <Title>Navegue por la Galeria</Title>
                    <ImagesContainer>
                        {fotos.filter(foto => {
                            return consulta == '' || 
                            foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").
                            includes(consulta.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""))
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
