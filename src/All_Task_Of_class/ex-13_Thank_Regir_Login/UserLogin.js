import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postRegistrati } from '../ReduxData/Action/loginAction';

export default function UserLogin() {
     
    const data = useSelector(y=>y.login);
    const disData = useDispatch();


    console.log(data);
    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(values) => {
                   disData(postRegistrati(values.data))
                }}
            >
                <Form>

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    />

                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="Enter Your Password" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <h1>{data?.isloadding? 'Loading':'' }</h1>
            <h1>{data?.error?.message}</h1>
            <p>{data?.item?.firstName}</p>
        </div>
    )
}
