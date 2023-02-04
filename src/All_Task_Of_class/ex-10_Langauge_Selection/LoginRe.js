import React, { useContext } from 'react'
import LangaugeContext from '../UserContext/LangaugeContext'

export const LoginRe = () => {
    const {lan} = useContext(LangaugeContext);

    const ObjLan = {
        en : {
            firstName : 'First Name',
            lastName : 'Last Name',
            email : 'Email',
            Password : 'Password',
            login : "Login"
        },
        hi : {
            firstName : 'पहला नाम',
            lastName : 'उपनाम',
            email : 'ईमेल',
            Password : 'पासवर्ड',
            login : 'लॉग इन करें'
        },
        gj : {
            firstName : 'પ્રથમ નામ',
            lastName : 'છેલ્લું નામ',
            email : 'ઈમેલ',
            Password : 'પાસવર્ડ',
            login : 'પ્રવેશ કરો'
        }
    }
  return (
    <div>
        <h2>{ObjLan[lan].login}</h2>
        <div>
            <label>{ObjLan[lan].firstName}</label>
            <input type="text"/>
        </div>
        <div>
            <label>{ObjLan[lan].lastName}</label>
            <input type="text"/>
        </div>
        <div>
            <label>{ObjLan[lan].email}</label>
            <input type="email"/>
        </div>
        <div>
            <label>{ObjLan[lan].Password}</label>
            <input type="Password"/>
        </div>
        <input type="submit" value='Login'/>
    </div>
  )
}
