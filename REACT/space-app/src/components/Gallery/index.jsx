import styled from "styled-components"
import Title from "../Title"
import Tag from "./Tags"
import Popular from "./Popular"
import ImageCard from "./ImageCard"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

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

const Gallery = () => {

    const {fotosGaleria, setFotoSeleccionada, consulta, handleFavorite } = useContext(GlobalContext)

    return (
        fotosGaleria.length == 0 ? <Title>Cargando ...</Title> :
        <>
            <Tag/>
            <GalleryContainer>

                <FluentSection>
                    <Title>Navegue por la Galeria</Title>
                    <ImagesContainer>
                        {fotosGaleria.filter(foto => {
                            return consulta == '' || 
                            foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").
                            includes(consulta.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                        }).
                            map( (foto) => {
                            return <ImageCard 
                                solicitarZoom = {foto => setFotoSeleccionada(foto)}
                                key={foto.id} 
                                foto={foto} 
                                marcarFavorito = {handleFavorite}
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
