import styled from "styled-components"

const ItemEstilizado = styled.li`

`

const NavigationItem = ({children, iconoActivo, iconoInactivo, activo=false}) => {
  return (
    <ItemEstilizado>
        <img src={activo ? iconoActivo : iconoInactivo} alt="" />
        {children}
    </ItemEstilizado>
  )
}

export default NavigationItem
