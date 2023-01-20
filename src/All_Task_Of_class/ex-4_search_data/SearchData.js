import React, { useEffect, useState } from 'react'
import './SearchData.css'
export default function SearchData() {
    const [data,setData] = useState([]);
    const [inpt,setInpt] = useState('');

    useEffect(() => {
    fetch("https://fakestoreapi.com/products").then(y=>y.json())
    .then(y=>setData(y))
    }, [])
    
    const myInput = (event) =>{
        setInpt(event.target.value);
    }

    return (
        <div>
            <div class="container">
                <h1>Prodecuts Details</h1>
                <input type="text" name="txt" value={inpt} onChange={myInput}/>
                <table id="customers">
                    <thead>
                        <tr id="tblhead">
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody id="tblbody">
                    {data.filter((value)=>{
                        return value.title.indexOf(inpt) >=0;
                    }).map((elemet)=>{
                            return <tr>
                                <td>{elemet.id}</td>
                                <td>{elemet.title}</td>
                                <td>{elemet.price}</td>
                                <td><img src={elemet.image} width="100px"/></td>
                                <td>
                                    <td>{elemet.rating.count}</td>
                                    <td>{elemet.rating.rate}</td>
                                </td>
                            </tr>    
                            })} 
                    </tbody>
                </table>  
            </div>
        </div>
    )
}
