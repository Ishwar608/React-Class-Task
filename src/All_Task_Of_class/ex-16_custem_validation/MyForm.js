import React, { useState } from 'react'


export default function MyForm() {
    const [obj, setobj] = useState({
        firstName: "",
        lastName: "",
        Address1: "",
        Address2: "",
        Password: "",
        ConfirmPassword: "",
        City: "",
        State: "",
        Country: ""

    });

    const [validationError, setvalidationError] = useState({

        firstName: "",
        lastName: "",
        Address1: "",
        Password: "",
        ConfirmPassword: "",
        City: "",
        State: "",
        Country: ""
    });

    const validateOutput = (name, value) => {

        let erorrMsg = '';
        debugger;
        switch (name) {
            case "firstName":
                if (!value) {
                    erorrMsg = "Please Enter First Name";
                }
                break;

            case "lastName":
                if (!value) {
                    erorrMsg = "Please Enter Last Name";
                }
                break;

            case "Address1":
                if (!value) {
                    erorrMsg = "Please Enter Address1";
                }

                break;

            case "Password":
                if (!value) {
                    erorrMsg = "Please Enter Password";
                }

                break;
            case "ConfirmPassword":
                if (!value) {
                    erorrMsg = "Please Enter ConfirmPassword";
                }

                break;

            case "City":
                if (!value) {
                    erorrMsg = "Please Enter City";
                }

                break;

            case "State":
                if (!value) {
                    erorrMsg = "Please Enter State";
                }

                break;

            case "Country":
                if (!value) {
                    erorrMsg = "Please Enter Country";
                }

                break;

        }

        return erorrMsg;



    }

    const mySubmit = (e) => {
        e.preventDefault();
        let ob = {};

        Object.keys(validationError).map((e) => {

            let errorMessage = validateOutput(e, obj[e]); //{name,value}

            ob[e] = errorMessage;

        })

        setvalidationError(ob);
        console.log(obj);

    }
    const inputHandler = (e) => {
        const { name, value } = e.target;

        let errorMessage = validateOutput(name, value);

        setvalidationError({ ...errorMessage, [name]: errorMessage });


        setobj({ ...obj, [name]: value })
    }
    // console.log(obj);
    return (
        <div>
            <form onSubmit={mySubmit}>

                <div style={{ margin: '5px' }}>
                    <input type="text" name="firstName" onChange={inputHandler} placeholder="Enter Your Name" />
                    <span style={{ "color": "Red" }}> {validationError?.firstName}</span>
                </div>

                <div style={{ margin: '5px' }}>
                    <input type="text" name="lastName" onChange={inputHandler} placeholder="Enter Your Last Name" />
                    <span style={{ "color": "Red" }}>{validationError?.lastName}</span>
                </div>

                <div style={{ margin: '5px' }}>
                    <input type="text" name="Address1" onChange={inputHandler} placeholder="Enter Your Address-1" />
                    <span style={{ "color": "Red" }}> {validationError?.Address1}</span>
                </div>

                <div style={{ margin: '5px' }}>
                    <input type="text" name="Address2" onChange={inputHandler} placeholder="Enter Your Address-2" />

                </div>
                <div style={{ margin: '5px' }}>
                    <input type="text" name="Password" onChange={inputHandler} placeholder="Enter Your Password" />
                    <span style={{ "color": "Red" }}> {validationError?.Password}</span>
                </div>
                <div style={{ margin: '5px' }}>
                    <input type="text" name="ConfirmPassword" onChange={inputHandler} placeholder="Enter Your Confirm Password" />
                    <span style={{ "color": "Red" }}>  {validationError?.ConfirmPassword}</span>
                </div>
                <div style={{ margin: '5px' }}>
                    <input type="text" name="City" onChange={inputHandler} placeholder="Enter Your City" />
                    <span style={{ "color": "Red" }}>  {validationError?.City}</span>
                </div>
                <div style={{ margin: '5px' }}>
                    <input type="text" name="State" onChange={inputHandler} placeholder="Enter Your State" />
                    <span style={{ "color": "Red" }}> {validationError?.State}</span>
                </div>
                <div style={{ margin: '5px' }}>
                    <input type="text" name="Country" onChange={inputHandler} placeholder="Enter Your Country" />
                    <span style={{ "color": "Red" }}>  {validationError?.Country}</span>
                </div>
                <input type="submit" style={{ margin: '5px' }} />
            </form>

        </div>
    )
}