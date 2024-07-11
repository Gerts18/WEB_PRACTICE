import styled from "styled-components"

const ItemEstilizado = styled.li`
    font-size: 20px;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: ${props => props.$activo ? "#7B78E5" : "#D9D9D9"} ;

    img{
        width: 24px;
        height: 24px;
    }
`

const NavigationItem = ({children, iconoActivo, iconoInactivo, activo=false}) => {
  return (
    <ItemEstilizado $activo={activo}>
        <img src={activo ? iconoActivo : iconoInactivo} alt="" />
        {children}
    </ItemEstilizado>
  )
}

export default NavigationItem
