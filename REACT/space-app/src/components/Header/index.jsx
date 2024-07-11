import styled from "styled-components"
import Input from "../Input"
import logo from '/imagenes/logo.png'

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 22px;
`

const Logo = styled.img`
    width: 220px;
`

const Header = () => {
  return (
     <HeaderEstilizado>
        <Logo src={logo} alt="logo de Space App" />
        <Input/>
     </HeaderEstilizado>
  )
}

export default Header
