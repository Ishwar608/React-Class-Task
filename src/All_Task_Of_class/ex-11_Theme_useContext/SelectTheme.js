import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ChangeTheme from '../UserContext/ChangeTheme';

export const SelectTheme = () => {
    const {theme,setTheme} = useContext(ChangeTheme);
    return (
        <Box className = {theme} sx={{textAlign : 'center'}}>
            <FormControl sx={{ mt : 5 , width: "250px" }}>
                <InputLabel id="demo-simple-select-label">Select Theme</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select Theme"
                    sx={{background : '#fff' , color : 'black'}}
                    onChange={(e)=>{setTheme(e.target.value)}}
                >
                    <MenuItem value="light">Light</MenuItem>
                    <MenuItem value="drak">Drak</MenuItem>
                </Select>
            </FormControl>
        </Box>

    )
}
