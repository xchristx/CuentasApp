import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import M405 from '../assets/405.jpg'

export const ProductCard = ({ nombre, precio }) => {
  return (
    <Grid item xs={12} sm={6} md={4} >
          <Card sx={{ width: 245 }}>
            <CardMedia
              sx={{ height: 245, objectFit:'cover' }}
              image={M405}
              title="405"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {precio} bs.
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
    </Grid>
  )
}
