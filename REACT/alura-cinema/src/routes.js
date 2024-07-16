import Favoritos from "pages/Favoritos"
import Inicio from "./pages/Inicio"
import Cabecera from "components/Cabecera"
import Pie from "components/Pie"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Container from "components/Container"
import FavoritosProvider from "context/Favoritos"


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Cabecera />

      <Container>

        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </FavoritosProvider>
        
      </Container>

      <Pie />
    </BrowserRouter>
  )
}

export default AppRoutes
