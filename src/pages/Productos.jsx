import { Container, Grid } from '@mui/material'
import { ProductCard } from '../components/ProductCard'
import { productos } from '../data/productos.Prueba,¡'

export const Productos = () => {
  return (
    <Container >
        <Grid container sx={{ mt:'6rem', border:'1px solid black' }} >
            {
                productos.map(el=>(
                    <ProductCard key={el.nombre} nombre={el.nombre} precio = {el.precioSF} />
                ))
            }

        </Grid>
    </Container>
  )
}
