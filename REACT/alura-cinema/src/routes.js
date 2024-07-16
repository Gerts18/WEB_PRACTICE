import Favoritos from "pages/Favoritos"
import Inicio from "./pages/Inicio"
import Cabecera from "components/Cabecera"
import Pie from "components/Pie"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Container from "components/Container"
import FavoritosProvider from "context/Favoritos"
import Player from "pages/Player"
import NotFound from "pages/NotFound"


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Cabecera />

      <Container>

        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/videos/:id" element={<Player/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </FavoritosProvider>
        
      </Container>

      <Pie />
    </BrowserRouter>
  )
}

export default AppRoutes
