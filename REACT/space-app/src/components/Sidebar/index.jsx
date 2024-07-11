import styled from "styled-components"
import NavigationItem from "./NavigationItem"

const ListalEstilizada = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <ListalEstilizada>
                    <NavigationItem iconoActivo="iconos/home-activo.png" iconoInactivo="iconos/home-inactivo.png" activo>
                        Inicio
                    </NavigationItem>
                    <NavigationItem iconoActivo="iconos/mas-vistas-activo.png" iconoInactivo="iconos/mas-vistas-inactivo.png"  >
                        Más visitados
                    </NavigationItem>
                </ListalEstilizada>
            </nav>
        </aside>
    )
}

export default Sidebar
