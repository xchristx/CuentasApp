import { Button, Container, Typography } from '@mui/material'
import React from 'react'

export const Home = () => {
  return (
    <Container sx={{ display:'flex', height:'100vh', alignItems:'center', justifyContent:'center' }} >
        <Typography variant='h1' sx={{}} >
            BIENVENIDO
        </Typography>
        <Button>
          Ingresar
        </Button>        
    </Container>
  )
}
