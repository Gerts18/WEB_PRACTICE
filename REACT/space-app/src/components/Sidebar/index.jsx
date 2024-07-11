import styled from "styled-components"

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
                    <li>
                        <a href="">Inicio</a>
                    </li>
                </ListalEstilizada>
            </nav>
        </aside>
    )
}

export default Sidebar
