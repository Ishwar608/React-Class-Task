import React, { useState } from 'react'
import { SetInputData } from './SetInputData';
import {Box, Button, Container, TextField} from '@mui/material';

export const DataDeleteEdit = () => {
    const [inpt, setInpt] = useState('');
    const [item, setItem] = useState([]);
    let [editItem, setEditItem] = useState(-1);

    const inputHandlar = (e) => {
        setInpt(e.target.value);
    }

    const saveData = () => {
        let myitem = [...item];
        console.log(editItem);
        if (editItem != -1) {
            myitem[editItem] = inpt;
            setItem(myitem);
        } else {
            myitem.push(inpt);
            setItem(myitem);
        }
        setEditItem(-1);
    }
    const dltData = (index) => {
        let dlt = [...item];
        dlt.splice(index, 1);
        setItem(dlt)
    }
    const editData = (index) => {
        let edt = [...item];
        console.log(edt[index]);
        setInpt(edt[index]);
        setEditItem(index);
    }
    return (
        <Container maxWidth="sm">
            <TextField id="standard-basic" label="Standard" variant="standard" onChange={inputHandlar} value={inpt}/>
            <Button onClick={saveData}>Contained</Button>

            {
                item.map((ele, index) => {
                    return (
                        <SetInputData data={ele} remove={dltData} i={index} editCell={editData}></SetInputData>
                    );
                })
            }
        </Container>
    )
}
