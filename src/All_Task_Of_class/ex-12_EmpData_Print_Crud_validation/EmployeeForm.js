import React, { useContext } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import './EmployeeForm.css'
import DataUseContext from './DataUseContext';
import  EmployeeDisplay  from './EmployeeDisplay';

export const EmployeeForm = () => {
    const { data, setData } = useContext(DataUseContext);

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Please Enter Your First Name !'),

        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Please Enter Your Last Name !'),

        email: Yup.string()
            .email('Invalid email')
            .required('Please Enter Your Email!'),

        password: Yup.string()

            .required("Please Enter Password"),

        confirmPassword: Yup.string().required("Please Enter Confirm Password").
            oneOf([null, Yup.ref('password')], "password should match"),


        accetTearm: Yup.boolean()
            .oneOf([true], "You must accept the terms and conditions")
    });

    const ErrorM = ({ children }) => {
        return (
            <div>
                <font color="red">{children}</font>
            </div>
        );
    };

    return (
        <>
            <div className='container'>
                <div className='form'>
                    <h1>Sign Up</h1>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                            accetTearm: false
                        }}
                        validationSchema={SignupSchema}

                        onSubmit={(values) => {
                            let d = [...data];
                            d.push(values);
                            setData(d);
                        }}
                    >
                        <Form>
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <Field id="firstName" name="firstName" placeholder="Enter Your First Name" />
                                <ErrorMessage name="firstName" component={ErrorM} />

                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <Field id="lastName" name="lastName" placeholder="Enter Your Last Name" />
                                <ErrorMessage name="lastName" component={ErrorM} />


                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="jane@acme.com"
                                    type="email"
                                />
                                <ErrorMessage name="email" component={ErrorM} />

                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <Field type="password" id="password" name="password" placeholder="Enter Your password" />
                                <ErrorMessage name="password" component={ErrorM} />

                            </div>

                            <div>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Enter Your Confirm Password" />

                                <ErrorMessage name="confirmPassword" component={ErrorM} />
                            </div>

                            <div>

                                <label htmlFor="accetTearm">
                                    <Field type="checkbox" id="accetTearm" name="accetTearm" />
                                    Accept Tearm conditions
                                </label>
                                <ErrorMessage name="accetTearm" component={ErrorM} />

                            </div>

                            <button className='btn' type="submit">Submit</button>
                        </Form>
                    </Formik>

                </div>

            </div>
        </>
    )
}
