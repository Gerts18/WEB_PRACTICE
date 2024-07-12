import styled from 'styled-components'
import GlobalStyles from './components/GlobalStyles'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'
import Gallery from './components/Gallery'
import photos from './fotos.json'
import { useState } from 'react'

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;

`

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`


const App = () => {

  const [fotosGaleria, setFotosGaleria] = useState(photos)

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />

        <AppContainer>
          <Header />

          <MainContainer>
            <Sidebar />
            <ContenidoGaleria>
              <Banner />
              <Gallery fotos = {fotosGaleria} />
            </ContenidoGaleria>
          </MainContainer>

        </AppContainer>

      </FondoGradiente>
    </>
  )
}

export default App
