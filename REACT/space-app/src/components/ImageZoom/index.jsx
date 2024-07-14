import styled from "styled-components"
import ImageCard from "../Gallery/ImageCard"
import Button from "../Button"
import Close from '../../../public/iconos/cerrar.png'
import { useState } from "react"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1150px;
    height: 600px;
    display: flex;
    justify-content: center;
    form {
        width: 0%;
        button {
            position: relative;
            top: 25px;
            right: 55px;
        }
    }
`

const ImageZoom = ({ foto, alCerrar, marcarFavorito }) => {

    return (
        <>
            {
                foto &&
                <>
                    <Overlay />
                    <DialogEstilizado open={!!foto} onClose={alCerrar}>
                        <ImageCard foto={foto} expandida={true} marcarFavorito={marcarFavorito} />
                        <form method="dialog">
                            <Button>
                                <img src={Close} />
                            </Button>
                        </form>
                    </DialogEstilizado>
                </>
            }
        </>
    )
}

export default ImageZoom