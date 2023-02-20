import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function LoginSaga() {
  const login = useSelector(y => y.login);

  const mydis = useDispatch();


  
  
  const [data,setData] = useState({
    email : '',
    password : ''
  });
  
  const inputHandlar = (e) =>{
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    
  }
  
  const LoginData = (e) =>{
    e.preventDefault();
    mydis({type:'START', payload: data})
    
  } 
  console.log(login);

  return (
    <div>
       <form onSubmit={LoginData}>
       <input type='text' name='email' placeholder='Enter your email' onChange={inputHandlar}/>
        <input type='password' name='password' placeholder='Enter your email' onChange={inputHandlar}/>
        <input type='submit' value='Save'/>
       </form>
      {
        login.isloadding? '...Loading' : ''
      }

    </div>
  )
}
