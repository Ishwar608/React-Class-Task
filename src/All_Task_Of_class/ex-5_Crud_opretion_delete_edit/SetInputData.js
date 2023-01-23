import React from 'react'
import { Button } from '@mui/material';
export const SetInputData = ({data,remove,i,editCell}) => {
  return (
    <>
    <tr>
        <td>{data}</td>
        <td><Button onClick={()=>remove(i)}>Delete</Button></td>
        <td><Button onClick={()=>{editCell(i)}}>Edit</Button></td>
    </tr>
    </>
  );
}
