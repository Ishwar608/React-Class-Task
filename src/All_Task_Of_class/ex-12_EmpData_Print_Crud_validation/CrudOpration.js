import React, { useCallback, useContext, useMemo } from 'react'

const CrudOpration = ({items,setItem,srcItem}) => {
    

    const dltData = (index)=>{
        let d = [...items]
        d.splice(index,1);
        setItem(d);
    };
    const srcNames = useMemo(()=>{
      if(!srcItem) return items;
      return items.filter(item =>
        item.firstName.toLowerCase().includes(srcItem.toLowerCase())
    );
    },[srcItem,items])

  return (
    <tbody>
           {
                        srcNames.map((element,index)=>{
                            return(
                                <tr>
                                    <td>{element.firstName}</td>
                                    <td>{element.lastName}</td>
                                    <td>{element.email}</td>
                                    <td>{element.password}</td>
                                    <td>{element.confirmPassword}</td>
                                    <td><button className='btn'>Edit</button>
                                    <button className='btn' onClick={()=>dltData(index)}>Delete</button></td>
                                </tr>
                            );                            
                        })
                    }
    </tbody>
  )
}

export default React.memo(CrudOpration)
