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
        
    </section>
  )
}

export default Popular
