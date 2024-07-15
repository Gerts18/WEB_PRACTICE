import styled from "styled-components";
import Title from "../Title";
import Tag from "./Tags";
import Popular from "./Popular";
import ImageCard from "./ImageCard";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const GalleryContainer = styled.div`
    display: flex;
`;

const FluentSection = styled.section`
    flex-grow: 1;
`;

const ImagesContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
`;

const Gallery = () => {
    const { state } = useContext(GlobalContext);

    if (state.loading) {
        return <Title>Cargando ...</Title>;
    }

    return (
        <>
            <Tag />
            <GalleryContainer>
                <FluentSection>
                    <Title>Navegue por la Galeria</Title>
                    <ImagesContainer>
                        {state.fotosGaleria.filter(foto => {
                            return state.consulta === '' || 
                                foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
                                .includes(state.consulta.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""));
                        }).map((foto) => {
                            return <ImageCard key={foto.id} foto={foto} />;
                        })}
                    </ImagesContainer>
                </FluentSection>
                <Popular />
            </GalleryContainer>
        </>
    );
};

export default Gallery;
