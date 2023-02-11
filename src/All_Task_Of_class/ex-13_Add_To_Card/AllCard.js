import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ShowMoreDate } from './ShowMoreDate';
import { Button, Icon } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function AllCard() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setData(response.data);
            });
    }, [])
    console.log(data);
    return (
        <div>
            <Stack
                direction="row"
                flexWrap='wrap'
                justifyContent='center'
                alignItems='center'
                backgroundColor='lightgray'
            >
                {
                    data.map((element, index) => {
                        return (
                            <Item
                                key={index}
                                sx={{ maxWidth: 250, m: 1 }
                                }
                            >
                                <CardMedia
                                    sx={{ height: 250 }}
                                    image={element.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {element.title.slice(0, 10)}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <ShowMoreDate helpText={element.description} />
                                    </Typography>
                                </CardContent>
                                <Button variant="contained">+ Add to cart</Button>

                            </Item>
                        );
                    })
                }

            </Stack>
        </div>
    )
}
export default React.memo(AllCard);