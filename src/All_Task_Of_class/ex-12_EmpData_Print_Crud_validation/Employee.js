import React, { useState } from 'react'
import DataUseContext from './DataUseContext';
import { EmployeeDisplay } from './EmployeeDisplay';
import { EmployeeForm } from './EmployeeForm'

export const Employee = () => {
  const [data,setData] = useState([]);
  return (
    <div>
      <DataUseContext.Provider value={{data,setData}}>
        <EmployeeForm />
        <EmployeeDisplay/>
      </DataUseContext.Provider>
    </div>
  )
}
