import React, { useEffect, useState } from 'react'
import './Readmore_Delete.css'

export const Readmore_Delete = () => {
    const [data, setData] = useState([]);
    const [rd,setRd] = useState(30);
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
    const reaMore = (index) =>{
        document.getElementById(index).innerHTML = data[index].description;
    }
    return (
        <div className='container'>
            <h1>My Products</h1>
            {data.map((element, index) => {
                return <div className='item'>
                    <img src={element.image} />
                    <div>
                    <p>{element.title.slice(0, 28)}</p>
                    <p id={index}>{element.description.slice(0, rd)} </p> <a onClick={()=>reaMore(index)}>..Read More</a>
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
