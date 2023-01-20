import React, { useEffect, useState } from 'react'
import reviews from './MyData'
import './Next_Pre_Button.css'

export default function Next_Pre_Button() {
    const [data, setData] = useState(reviews)
    const [index,setIndex] = useState(0);
    const prevBtn = () =>{
        if(index > 0){
            setIndex(index-1);
        }
    }
    const nextBtn = () =>{
        if(index < 5){
            setIndex(index+1);
        } 
    }
    return (
    <div>
         <main> 
            <section className="container">
              <div className="title">
                <h2>our reviews</h2>
                <div className="underline"></div>
              </div>
              <article className="review">
                <div className="img-container">
                  <img src={data[index].image} id="person-img" alt="" />
                </div>
                <h4 id="author">{data[index].name}</h4>
                <p id="job">{data[index].job}</p>
                <p id="info">
                {data[index].text}
                </p>
                   <div className="button-container">
                  <button className="prev-btn" onClick={prevBtn}>
                    &larr;
                  </button>
                  <button className="next-btn" onClick={nextBtn}>
                    &rarr;
                  </button>
                </div>
                <button className="random-btn">surprise me</button>
              </article>
            </section>
          </main>
    </div>
  )
}
