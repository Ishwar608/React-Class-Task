import React, { useState } from 'react'

export default function Ex_1_usestate() {
  const [val,setValue] = useState(0);

    const inc = () =>{
        setValue(val+1);
    }
    const dec = () =>{
        setValue(val-1);
    }
    const multi = () =>{
        setValue(val*5);
    }
    return (
    <div>
        <p>Value:-{val}</p>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decriment</button>
        <button onClick={multi}>Multiplis</button>
    </div>
  )
}
