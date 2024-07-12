import styled from "styled-components"
import Title from "../../Title"
import populares from './fotos-populares.json'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > img {
    max-width: 212px;
    height: 158px;
    border-radius: 20px;
  }
`

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #C98CF1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`


const Popular = () => {
  return (
    <section>
        <Title $align={"center"} >Populares</Title>
        <Container>
          {
            populares.map( (popular) => {
              return <img key={popular.id} src={popular.path} alt={popular.alt} />
            } )
          }
        </Container>
        <Button>Ver más</Button>
    </section>
  )
}

export default Popular
