import React, { useContext, useMemo, useState } from 'react'
import CrudOpration from './CrudOpration';
import DataUseContext from './DataUseContext'
import './EmployeeDisplay.css'
import  SearchData  from './SearchData';

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
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Confirm Password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <CrudOpration items={data} setItem = {setData} srcItem={srcItem}/>
        </table>
    </div>
  )
}
