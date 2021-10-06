import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { loginUser } from '../../redux/ApiCalls';

import { Form, Formik } from 'formik'
import TextField from "./TextField";

import * as Yup from 'yup'

const validate = Yup.object({

    email: Yup.string().email("email is invalid").required("Email must be entered"),
    password: Yup.string().min(6, "Minimum 6 character").required("Password must be entered"),

})

const Login = (props) => {

    const dispatch = useDispatch()

    let history = useHistory();


    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Log In</h1>

                        <Formik
                            initialValues={{

                                email: "",
                                password: "",

                            }}
                            validationSchema={validate}
                            onSubmit={(values, action) => {
                                const userCred = {
                                    email: values.email,
                                    pass: values.password
                                }
                                console.log(userCred)
                                loginUser(userCred, dispatch, history)
                                action.resetForm()
                            }}
                        >
                            {formik => (
                                <Form>
                                    <TextField name="email" type="email" placeholder="Username" />
                                    <TextField name="password" type="password" placeholder="Password" />
                                    <button className="btn btn-info btn-block mt-4">Submit</button>
                                </Form>
                            )}

                        </Formik>



                    </div>
                </div>
            </div>
        </div>

    )
}



export default Login
