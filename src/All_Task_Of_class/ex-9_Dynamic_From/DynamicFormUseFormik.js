import React from 'react'
import { Formik, Field, Form } from 'formik';

export const DynamicFormUseFormik = () => {
    return (
        <div>
            <h1>Education</h1>
            <Formik
                initialValues={{
                    basicInfo: {
                        firstName: "",
                        lastName: ""
                    },
                    education: [{
                        uniName: "",
                        startDate: "",
                        endDate: "",
                        educationLevel: ""
                    }]
                }}
                onSubmit={ (values) => {
                console.log(values);
                }}
            >
                <Form>
                    <label htmlFor="basicInfo.firstName">First Name</label>
                    <Field id="basicInfo.firstName" name="basicInfo.firstName" placeholder="Enter Your First Name" />

                    <label htmlFor="basicInfo.lastName">Last Name</label>
                    <Field id="basicInfo.lastName" name="basicInfo.lastName" placeholder="Enter Your Last Name" />
                    
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}
