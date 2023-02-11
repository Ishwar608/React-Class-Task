import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Button, Checkbox, Container, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import { Box, textAlign } from '@mui/system';

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

    const ErrorM = ({ children }) => {
        return (
            <div>
                <font color="red">{children}</font>
            </div>
        );
    };
    
    return (
        <Container maxWidth="sm"
        >
            <Typography component="h1"
                sx={{
                    m: 3,
                    textAlign: 'center',
                }}
                variant="h5">

                Registration
            </Typography>
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
                    <TextField
                        id="firstName"
                        name="firstName"
                        variant="outlined"
                        label="First Name"
                        sx={{ m: 1 }}
                    />
                    <ErrorMessage name="firstName" component={ErrorM} />

                    <TextField
                        id="lastName"
                        name="lastName"
                        variant="outlined"
                        label="Last Name"
                        sx={{ m: 1 }}
                    />
                    <ErrorMessage name="lastName" component={ErrorM} />

                    <RadioGroup
                        row
                        sx={{ m: 1 }}
                        aria-labelledby="demo-row-radio-buttons-group-label"
                    >
                        {
                            gender.map((gen) => {
                                return (
                                    <FormControlLabel
                                        name="gender"
                                        value={gen}
                                        control={<Radio />}
                                        label={gen} />
                                );
                            })
                        }
                    </RadioGroup>
                    <ErrorMessage name="gender" component={ErrorM} />

                    <TextField
                        type="date"
                        id="dob"
                        name="dob"
                        variant="outlined"
                        label="Date Of Birth"
                        InputLabelProps={{
                            shrink: true,

                        }}
                        sx={{ m: 1, width: "225px" }}
                    />
                    <ErrorMessage name="dob" component={ErrorM} />

                    <TextField
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                        variant="outlined"
                        label="Email"
                        sx={{ m: 1 }}
                    />
                    <ErrorMessage name="email" component={ErrorM} />

                    <TextField
                        type="password"
                        id="password"
                        name="password"
                        variant="outlined"
                        label="Password"
                        sx={{ m: 1 }}
                    />
                    <ErrorMessage name="password" component={ErrorM} />

                    <TextField
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        variant="outlined"
                        label="Confirm Password"
                        sx={{ m: 1 }}
                    />

                    <ErrorMessage name="confirmPassword" component={ErrorM} />


                    <TextField
                        id="phoneNO"
                        name="phoneNO"
                        variant="outlined"
                        margin="normal"
                        label="Mobile No"
                        sx={{ m: 1 }}

                    />

                    <ErrorMessage name="phoneNO" component={ErrorM} />


                    <TextField
                        id="Address"
                        name="Address"
                        variant="outlined"
                        margin="normal"
                        label="Address"
                        sx={{ m: 1 }}

                    />
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Select City</InputLabel>
                        <Select
                            name='City'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={{ m: 1, width: "225px" }}

                        >

                            {
                                cities.map((city) => {
                                    return (
                                        <MenuItem value={city}>{city}</MenuItem>
                                    );
                                })
                            }
                        </Select>
                    </FormControl>



                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Select City</InputLabel>
                        <Select
                            name='State'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={{ m: 1, width: "225px" }}

                        >
                            {
                                states.map((stat) => {
                                    return (
                                        <MenuItem value={stat}>{stat}</MenuItem>
                                    );
                                })
                            }
                        </Select>
                    </FormControl>

                    <TextField
                        id="zipcode"
                        name="zipcode"
                        variant="outlined"
                        label="zipcode"
                        sx={{ m: 1 }}

                    />
                    <ErrorMessage name="zipcode" component={ErrorM} />

                    <Box>
                        <FormControlLabel
                            control={<Checkbox typeof='checkbox' name="acceptTerm" value="remember" color="primary" />}
                            label="Accept term and Condition"
                            sx={{ m: 1 }}

                        />
                    </Box>


                    <ErrorMessage name="acceptTerm" component={ErrorM} />
                    <Box sx={{textAlign: 'center'}}>

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                mt: 3, mb: 2,width:'180px'
                            }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Form>
            </Formik>
        </Container >
    )
}
