import styled from 'styled-components'
import GlobalStyles from './components/GlobalStyles'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'

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

function App() {

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />

        <AppContainer>
        <Header />

          <MainContainer>
            <Sidebar />
            <Banner />
          </MainContainer>

        </AppContainer>

      </FondoGradiente>
    </>
  )
}

export default App
