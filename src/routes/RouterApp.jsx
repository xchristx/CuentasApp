import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import { Entregas } from "../pages/Entregas"
import { Home } from "../pages/Home"
import { Pedidos } from "../pages/Pedidos"
import { Productos } from "../pages/Productos"

export const RouterApp = () => {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/pedidos" element={ <Pedidos /> } />
        <Route path="/entregas" element={ <Entregas /> } />
        <Route path="/productos" element={ <Productos /> } />
    </Routes>
    </>
  )
}
