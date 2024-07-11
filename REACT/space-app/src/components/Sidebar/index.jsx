import styled from "styled-components"
import NavigationItem from "./NavigationItem"
import { useState } from "react"

const ListalEstilizada = styled.ul`
    margin-left:24px;
    padding: 0;
    list-style: none;
`

const Sidebar = () => {

    const [itemList, setItemList] = useState([
        {
            nombre : 'Inicio',
            iconoActivo:"iconos/home-activo.png" ,
            iconoInactivo:"iconos/home-inactivo.png",
            active : true,
            id: 0
        },
        {
            nombre: 'Más Visitados',
            iconoActivo:"iconos/mas-vistas-activo.png", 
            iconoInactivo:"iconos/mas-vistas-inactivo.png",
            active: false,
            id: 1
        },
        {
            nombre: ' Más Me Gusta',
            iconoActivo:"/iconos/me-gusta-activo.png",
            iconoInactivo:"/iconos/me-gusta-inactivo.png",
            active: false,
            id: 2
        },
        {
            nombre: 'Nuevas',
            iconoActivo:"/iconos/nuevas-activo.png",
            iconoInactivo:"/iconos/nuevas-inactivo.png",
            active: false,
            id: 3
        },
        {
            nombre: 'Sorpréndeme',
            iconoActivo:"/iconos/sorprendeme-activo.png",
            iconoInactivo:"/iconos/sorprendeme-inactivo.png",
            active: false,
            id: 4
        }
    ])

    const handleActive = (id) => {
        const newItemList = itemList.map( (item) => {
            if(item.id === id){
                item.active = true
            }else{
                item.active = false
            }
            return item
        } )
        setItemList(newItemList)
    }

    return (
        <aside>
            <nav>
                <ListalEstilizada>
                    {
                        itemList.map( (item) => {
                            return(
                                <NavigationItem 
                                    key= {item.id}
                                    id = {item.id}
                                    iconoActivo={item.iconoActivo} 
                                    iconoInactivo={item.iconoInactivo}
                                    activo={item.active} 
                                    change={handleActive} >
                                        {item.nombre}
                                </NavigationItem>
                            )
                        } )
                    }
                </ListalEstilizada>
            </nav>
        </aside>
    )
}

export default Sidebar
