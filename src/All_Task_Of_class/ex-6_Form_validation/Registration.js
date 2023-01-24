import React, { useState } from 'react'
import './Registration.css'
import { Disdataintable } from './Disdataintable';

export const Registration = () => {
    const [myData, setData] = useState([]);
    const [obj, setObj] = useState({
        firstName: "",
        lastName: "",
        mobileNo: "",
        Address: "",

    })
    const [validationError, setvalidationError] = useState({
        firstName: "",
        lastName: "",
        mobileNo: "",
        Address: "",

    })

    const validationOutPut = (name,value) =>{
        let erroeMsg = '';

        switch(name){
            case "firstName":
                if(!value){
                    erroeMsg = "Please Enter First Name";
                }
            break;    
            case "lastName":
                if(!value){
                    erroeMsg = "Please Enter Last Name";
                }
            break;    
            case "mobileNo":
                if(!value){
                    erroeMsg = "Please Enter Mobile Number";
                }
            break;    

            case "Address":
                if(!value){
                    erroeMsg = "Please Enter Address";
                }
            break;    
        }

        return erroeMsg;
    }

    const submitData = (e) => {
        let rowData = [...myData];
       let ob = {};
         Object.keys(validationError).map((e)=>{
            let errorMassage =  validationOutPut(e,obj[e]);
            ob[e] = errorMassage;
        })
        setvalidationError(ob);    
       
        e.preventDefault();
        rowData.push(obj);
       
        setData(rowData);

    }
    const inputHandlar = (e) => {
        const { name, value } = e.target;
        setObj({ ...obj, [name]: value });

        let errorMassage =  validationOutPut(name,value);
      setvalidationError({...errorMassage,[name] : errorMassage});
    }

    return (
        <>
            <div className='container'>
                <form className='frm' onSubmit={submitData}>
                    <h1>Registration</h1>
                    <div>
                        <input type="text" name="firstName" placeholder='Enter your First Name' onChange={inputHandlar} onBlur={inputHandlar}/>
                        <span>{validationError?.firstName}</span>
                    </div>
                    <div>
                        <input type="text" name="lastName" placeholder='Enter your Last Name' onChange={inputHandlar} />
                        <span>{validationError?.lastName}</span>
                    </div>
                    <div>
                        <input type="text" name="mobileNo" placeholder='Enter your Mobile No'
                            onChange={inputHandlar} />
                        <span>{validationError?.mobileNo}</span>
                    </div>
                    <div>
                        <input type="text" name="Address" placeholder='Enter your Address'
                            onChange={inputHandlar} />
                        <span>{validationError?.Address}</span>
                    </div>


                    <input type="submit" value="Sign In" />
                </form>
            </div>
            {
                myData.map((element) => {
                    return (
                        <Disdataintable data={element} />
                    );
                })
            }
        </>
    )
}
