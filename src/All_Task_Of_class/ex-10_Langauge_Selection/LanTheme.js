import React, { useState } from 'react'
import LangaugeContext from '../UserContext/LangaugeContext'
import { LoginRe } from './LoginRe'
import { SelectLan } from './SelectLan'

export const LanTheme = () => {
    const [lan,setLan] = useState("en");
  return (
    <>
        <h2>Hello</h2>
        <LangaugeContext.Provider value={{lan,setLan}}>
            <SelectLan/>
            <LoginRe/>
        </LangaugeContext.Provider>
    </>
  )
}
