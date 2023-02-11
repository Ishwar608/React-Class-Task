import React, { useContext, useMemo, useState } from 'react'
import CrudOpration from './CrudOpration';
import DataUseContext from './DataUseContext'
import './EmployeeDisplay.css'
import  SearchData  from './SearchData';
import TableHeading from './TableHeading';

export const EmployeeDisplay = () => {
    const {data, setData} = useContext(DataUseContext);
    const [inpt , setInpt] = useState('');
    const [srcItem , setSrcItem] = useState('');   
  
    
    
  return (
    <div>
        <SearchData 
        inpt={inpt} 
        setInpt={setInpt} 
        setSrcItem={setSrcItem} 
        srcItem={srcItem}
        />
        <table>
            <TableHeading items={data}/>
            <CrudOpration items={data} setItem = {setData} srcItem={srcItem}/>
        </table>
    </div>
  )
}
