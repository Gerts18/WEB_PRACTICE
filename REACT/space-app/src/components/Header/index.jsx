import styled from "styled-components"
import Input from "../Input"

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 22px;

    img{
        width: 220px;
    }
`

const Header = () => {
  return (
     <HeaderEstilizado>
        <img src="imagenes/logo.png" alt="logo de Space App" />
        <Input/>
     </HeaderEstilizado>
  )
}

export default Header
