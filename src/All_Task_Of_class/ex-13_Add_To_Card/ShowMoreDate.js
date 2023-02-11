import React, { useMemo, useState } from 'react'

export const ShowMoreDate = ({helpText}) => {
    const [showMore,setShowMore] = useState(false); 

    const d = useMemo(()=>{
        return helpText.slice(0,30).concat('...');
    },[helpText]);
     
  return (
    <div>
        <p onClick={()=>{setShowMore(!showMore)}}>
            {showMore ? helpText : d} {showMore ? 'less' : 'More'}
        </p>
    </div>
  )
}
