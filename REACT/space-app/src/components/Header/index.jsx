import styled from "styled-components"

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 0px;

    img{
        width: 220px;
    }
`

const Header = () => {
  return (
     <HeaderEstilizado>
        <img src="imagenes/logo.png" alt="logo de Space App" />
     </HeaderEstilizado>
  )
}

export default Header
