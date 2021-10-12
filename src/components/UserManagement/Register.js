import React, { useState } from "react";

import axios from "axios";

import { useHistory } from "react-router-dom";
import { Form, Formik, Field } from 'formik'
import TextField from "./TextField";

import { Alert, Button } from "react-bootstrap"

import * as Yup from 'yup'

const validate = Yup.object({
    name: Yup.string().required("Name must be entered"),
    email: Yup.string().email("email is invalid").required("Email must be entered"),
    password: Yup.string().min(6, "Minimum 6 character").required("Password must be entered"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Password Must Match").required("Password must be entered"),
})

const Register = () => {

    let history = useHistory();
    const [show, setShow] = useState(false);



    const createNewUser = async (username, fullName, password, confirmPassword, accountType) => {
        const data = {
            username: username,
            fullName: fullName,
            password: password,
            confirmPassword: confirmPassword,
            accountType: accountType.toUpperCase(),

        }
        await axios.post('http://localhost:8080/api/users/register', data)
            .then((res) => {
                setShow(true)

            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }

    if (show) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <Alert variant="success">
                            <Alert.Heading>Congrats! Your Acount has Created Successfully</Alert.Heading>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Button onClick={() => { setShow(false); history.push("/login") }} variant="outline-success">
                                    Go to Login!
                                </Button>
                            </div>
                        </Alert>

                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Sign Up</h1>
                        <p className="lead text-center">Create your Account</p>

                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                password: "",
                                confirmPassword: "",
                                accountType: "",
                            }}
                            validationSchema={validate}
                            onSubmit={(values, action) => {
                                console.log(values)
                                createNewUser(values.email, values.name, values.password, values.confirmPassword, values.accountType)
                                action.resetForm()
                            }}
                        >
                            {formik => (
                                <>
                                    <Form>
                                        <TextField type="text"

                                            placeholder="Name"
                                            name="name" />
                                        <TextField type="email"

                                            placeholder="Email Address"
                                            name="email" />
                                        <TextField type="password"

                                            placeholder=" Password"
                                            name="password" />
                                        <TextField type="password"

                                            placeholder="Confirm Password"
                                            name="confirmPassword" />

                                        <div className="AccTypeMainContainer">
                                            <h4>Select Account Type</h4>
                                            <div className="AccTypeContainer">

                                                <label className="col-xl-6 col-lg-6">
                                                    <Field type="radio" name="accountType" value="Customer" />
                                                    Customer
                                                </label>
                                                <label className="col-xl-6 col-lg-6">
                                                    <Field type="radio" name="accountType" value="Business" />
                                                    Business Account
                                                </label>
                                            </div>
                                        </div>


                                        <button className="btn btn-info btn-block mt-4">Submit</button>
                                    </Form>
                                </>
                            )}
                        </Formik>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register
