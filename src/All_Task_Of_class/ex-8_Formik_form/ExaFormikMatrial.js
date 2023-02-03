import React from 'react'
import Container from '@mui/material/Container';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Button, TextField } from '@mui/material';
import { Box, margin } from '@mui/system';


export const ExaFormikMatrial = () => {

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Please Enter Your First Name !'),

        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Please Enter Your Last Name !'),
    });
    return (
        <Container>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                }}

                validationSchema={SignupSchema}

                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                <Form style={{margin:"50px"}}>
                    <TextField
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your First Name"
                    />
                    <ErrorMessage name="firstName" />

                    <TextField
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your Last Name"
                    />
                    <ErrorMessage name="lastName" />

                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                </Form>
            </Formik>
        </Container>
    )
}
