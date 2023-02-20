import React from 'react';
 import  {useDispatch,useSelector} from 'react-redux';

export default function CounterSaga() {

    const counter = useSelector(y=>y.counter);

    const mydis = useDispatch();

    const inc = ()=> {

        mydis({type: 'INCREMENTASYNC'})
    }
    const dec = ()=> {

        mydis({type: 'DECREMENTASYNC'})
    }
  return (
    <div>
        <h1>Increment And Decrement Counter</h1>
        <span style={{ margin :'2px'}}>Value : -{counter}</span>
        <button style={{margin : '5px' ,padding : '5px 10px' }} onClick={inc}>+</button>
        <button style={{margin : '5px' ,padding : '5px 10px' }} onClick={dec}>-</button>
    </div>
  )
}