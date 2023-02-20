import React from 'react'
import {Button} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../Redux-Toolkit/slice/counterSlice';

export default function CounterTask() {

    const counter = useSelector(y=>y.counter)

    const disData = useDispatch();
 
    const incre = ()=> {
 
     disData(increment())
    }
 
    const decre = ()=> {
 
     disData(decrement())
    }
  return (
    <div>
        {counter.count}
        <Button variant='contained' sx={{m:1}} onClick={incre}>+</Button>
        <Button variant='contained' sx={{m:1}} onClick={decre}>-</Button>
    </div>
  )
}
