import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import axios from 'axios'
import { Box } from '@mui/system';
import './theme.css';
import ChangeTheme from '../UserContext/ChangeTheme';

export const CardData = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then(y => {
        setData(y.data);
      })
  }, [])

const {theme} = useContext(ChangeTheme);
  
  console.log(theme);
  return (
    <Container className={theme}>
      <Typography sx={{textAlign : 'center'}}variant="h2" component="div">
        Product
      </Typography>

      <Box 
      sx={{
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        flexWrap: "wrap"
      }} >
        {
          data.map((element) => {
            return (
              <Card sx={{ maxWidth: 220, m: 2 }}  >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={element.image}
                    alt="green iguana"
                  />
                  <CardContent className={theme}>
                    <Typography gutterBottom variant="h5" component="div">
                      {element.category}
                    </Typography>
                    <Typography variant="body2" >
                      {element.description.slice(0, 150)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );

          })
        }
      </Box>
    </Container>
  )
}
