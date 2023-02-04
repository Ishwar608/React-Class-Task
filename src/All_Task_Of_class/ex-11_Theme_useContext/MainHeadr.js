import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { SelectTheme } from './SelectTheme';
import ChangeTheme from '../UserContext/ChangeTheme';
import { CardData } from './CardData';
export const MainHeadr = () => {
    const [theme,setTheme] = useState("light");
  return (
    <div className={theme}>
        <ChangeTheme.Provider value={{theme,setTheme}}>
            <SelectTheme/>
            <CardData/>
        </ChangeTheme.Provider>
    </div>
  )
}
