import React, { useMemo } from 'react'

export default function TableHeading({items}) {
    const headData = ()=>{
        console.log('call the heading');
        return Object.keys(items[0]).map((key,index)=>{
            return(
                <th key={index}>{key.toUpperCase()}</th>
            )
        })
    }
    return (
    <thead>
        <tr>
            {
                items.length >= 1 ? headData : ''
            }
        </tr>
    </thead>
  )
}
