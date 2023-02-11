import React, { useEffect, useState } from 'react'
import './Readmore_Delete.css'
import { ShowMoreDate } from './ShowMoreDate';

export const Readmore_Delete = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then(y => y.json())
            .then(y => {
                setData(y);
            })
    }, [])
    const dltData = (index) => {
        let d = [...data];
        d.splice(index,1);
        setData(d);
    }
   
    return (
        <div className='container'>
            <h1>My Products</h1>
            {data.map((element, index) => {
                return <div className='item'>
                    <img src={element.image} />
                    <div>
                    <p>{element.title.slice(0, 28)}</p>
                    <ShowMoreDate helpText={element.description}/>
                    <p><span>Price:-</span>{element.price}</p>
                    <div className='btndiv'>
                        <button className='btn' onClick={() => dltData(index)}>Delete</button>
                    </div>
                    
                    </div>
                </div>
            })}
        </div>
    )

}
