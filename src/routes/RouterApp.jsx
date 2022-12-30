import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import { Home } from "../pages/Home"
import { Pedidos } from "../pages/Pedidos"

export const RouterApp = () => {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/pedidos" element={ <Pedidos /> } />
    </Routes>
    </>
  )
}
