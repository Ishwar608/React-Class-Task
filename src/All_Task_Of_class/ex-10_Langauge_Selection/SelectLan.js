import React, { useContext } from 'react'
import LangaugeContext from '../UserContext/LangaugeContext';


export const SelectLan = () => {
  const {lan,setLan} = useContext(LangaugeContext);
  return (
    <>
       <select onChange={(e)=>setLan(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="gj">Gujrati</option>
        </select> 
    </>
  )
}
