import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'

export const Home = () => {
  return (
    <Container sx={{ display:'flex', height:'100vh', alignItems:'center', justifyContent:'center' }} >
      <Stack>
        <Typography variant='h2' sx={{  }} >
            BIENVENIDO
        </Typography>
        <Button>
          Ingresar
        </Button>        
      </Stack>
    </Container>
  )
}
