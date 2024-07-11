import styled from "styled-components"
import NavigationItem from "./NavigationItem"
import { useState } from "react"

const ListalEstilizada = styled.ul`
    margin-left:24px;
    padding: 0;
    list-style: none;
`

const Sidebar = () => {

    const [iconoActivo, setIconoActivo] = useState(true)

    const handleActive = () => {
        setIconoActivo(!iconoActivo)
    }

    return (
        <aside>
            <nav>
                <ListalEstilizada>

                    <NavigationItem 
                        iconoActivo="iconos/home-activo.png" 
                        iconoInactivo="iconos/home-inactivo.png" 
                        activo={iconoActivo} 
                        change={handleActive} >
                            Inicio
                    </NavigationItem>
                    <NavigationItem 
                        iconoActivo="iconos/mas-vistas-activo.png" 
                        iconoInactivo="iconos/mas-vistas-inactivo.png" 
                        activo={!iconoActivo} 
                        change={handleActive} >
                            Más visitados
                    </NavigationItem>
                    <NavigationItem
                        iconoActivo="/iconos/me-gusta-activo.png"
                        iconoInactivo="/iconos/me-gusta-inactivo.png"
                        activo={!iconoActivo} 
                        change={handleActive} >
                            Más Me Gusta
                    </NavigationItem>
                    <NavigationItem
                        iconoActivo="/iconos/nuevas-activo.png"
                        iconoInactivo="/iconos/nuevas-inactivo.png"
                        activo={!iconoActivo} 
                        change={handleActive} >
                            Nuevas
                    </NavigationItem>
                    <NavigationItem
                        iconoActivo="/iconos/sorprendeme-activo.png"
                        iconoInactivo="/iconos/sorprendeme-inactivo.png"
                        activo={!iconoActivo} 
                        change={handleActive}>
                        Sorpréndeme
                    </NavigationItem>

                </ListalEstilizada>
            </nav>
        </aside>
    )
}

export default Sidebar
