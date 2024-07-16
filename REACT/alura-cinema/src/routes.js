import Inicio from "./pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
