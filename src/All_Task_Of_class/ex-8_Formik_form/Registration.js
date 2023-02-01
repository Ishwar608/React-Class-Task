import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

export const Registration = () => {
    let gender = ["Male", "Female", "Other"];
    let cities = ["Udaipur", "Vadodara", "Pune", "Gunagradh", "Gandi Nagar"];
    let states = ["Rajsthan", "Gujrat", "UP", "MP", "Maharatra"]

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Please Enter Your First Name !'),

        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Please Enter Your Last Name !'),

        gender: Yup.string()
        .required('Please Select Gender!'),

        dob: Yup.date()
            .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
            .required('Please Enter Your DOB!'),

        email: Yup.string()
            .email('Invalid email')
            .required('Please Enter Your Email!'),

        password: Yup.string()
        .matches(/^(?=.[A-Za-z])(?=.[0-9])(?=.[@$!%#?&])[A-Za-z0-9@$!%*#?&]{8,}$/, 'Must use Alpha Numeric with special char and length 8 must be 8 charcarter')
        .required("Please Enter Password"),

        confirmPassword: Yup.string().required("Please Enter Confirm Password").
            oneOf([null, Yup.ref('password')], "password should match"),

        phoneNO: Yup.string()
        .required()
        .matches(/^[0-9]+$/, "Must be only digits")
        .max(10, "Must be exactly 10 digits"),

        zipcode: Yup.string()
        .required()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(5, "Must be exactly 6 digits")
        .max(6, "Must be exactly 6 digits"),

        acceptTerm: Yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
    });

    return (
        <div>
            Registration
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    gender: '',
                    dob: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    phoneNO: '',
                    Address: '',
                    City: '',
                    State: '',
                    zipcode: '',
                    acceptTerm: false,
                }}

                validationSchema={SignupSchema}

                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field id="firstName" name="firstName" placeholder="Enter your First Name" />
                        <ErrorMessage name="firstName" />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <Field id="lastName" name="lastName" placeholder="Please your Last Name" />
                        <ErrorMessage name="lastName" />
                    </div>
                    <div>
                        <div id="my-radio-group">Gender</div>
                        {
                            gender.map((gen) => {
                                return (
                                    <label>
                                        <Field type="radio" name="gender" value={gen} />
                                        {gen}
                                    </label>
                                );
                            })
                        }
                        <ErrorMessage name="gender" />
                    </div>
                    <div>
                        <label htmlFor="dob">Date of Birth</label>
                        <Field type="date" id="dob" name="dob" />
                        <ErrorMessage name="dob" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                        <ErrorMessage name="email" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" placeholder="Enter your Password" />
                        <ErrorMessage name="password" />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Enter your Password" />

                        <ErrorMessage name="confirmPassword" />
                    </div>

                    <div>
                        <label htmlFor="phoneNO">Mobile NO</label>
                        <Field id="phoneNO" name="phoneNO" placeholder="Enter your Mobile NO" />
                        <ErrorMessage name="phoneNO" />
                    </div>

                    <div>
                        <label htmlFor="Address">Address</label>
                        <Field id="Address" name="Address" placeholder="Enter your Address" />
                    </div>

                    <div>
                        <label htmlFor="City">City</label>
                        <Field name="City" as="select">
                            {
                                cities.map((city) => {
                                    return (
                                        <option value={city}>{city}</option>
                                    );
                                })
                            }
                        </Field>
                    </div>

                    <div>
                        <label htmlFor="state">State</label>
                        <Field name="State" as="select">
                            {
                                states.map((stat) => {
                                    return (
                                        <option value={stat}>{stat}</option>
                                    );
                                })
                            }
                        </Field>
                    </div>

                    <div>
                        <label htmlFor="zipcode">Zip-Code</label>
                        <Field id="zipcode" name="zipcode" placeholder="Enter your Zipcode" />
                        <ErrorMessage name="zipcode" />
                    </div>



                    <div>
                        <label>
                            <Field type="checkbox" name="acceptTerm" />
                            Accept term and Condition
                        </label>
                        <ErrorMessage name="acceptTerm" />
                    </div>

                    <button type="submit">Submit</button>

                </Form>
            </Formik>
        </div>
    )
}
