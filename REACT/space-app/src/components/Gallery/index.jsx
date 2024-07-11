import styled from "styled-components"
import Title from "../Title"
import Tag from "./Tags"
import Popular from "./Popular"

const GalleryContainer = styled.div`
    display: flex;
`

const FluentSection = styled.section`
    flex-grow: 1;
`

const Gallery = () => {
    return (
        <>
            <Tag/>
            <GalleryContainer>

                <FluentSection>
                    <Title>Navegue por la Galeria</Title>
                </FluentSection>

                <Popular/>


            </GalleryContainer>

        </>
    )
}

export default Gallery
