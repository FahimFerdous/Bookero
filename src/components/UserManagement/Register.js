import React, { useState } from "react";

import axios from "axios";

import { useHistory } from "react-router-dom";

const Register = () => {

    let history = useHistory();

    const [userData, setuserData] = useState({});

    const createNewUser = async (username, fullName, password, confirmPassword) => {
        const data = {
            username: username,
            fullName: fullName,
            password: password,
            confirmPassword: confirmPassword

        }
        await axios.post('http://localhost:8080/api/users/register', data)
            .then((res) => {
                console.log(res)
                history.push("/login")
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }
    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Sign Up</h1>
                        <p className="lead text-center">Create your Account</p>
                        <form onSubmit={(e) => {
                            e.preventDefault();

                            createNewUser(userData.email, userData.name, userData.password, userData.confirmPassword);

                        }}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Name"
                                    name="name"
                                    onChange={(e) => {
                                        const name = e.target.value;
                                        setuserData({ ...userData, ...{ name } })
                                    }}
                                    required
                                />

                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Email Address"
                                    name="email"
                                    onChange={(e) => {
                                        const email = e.target.value;
                                        setuserData({ ...userData, ...{ email } })
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Password"
                                    name="password"
                                    onChange={(e) => {
                                        const password = e.target.value;
                                        setuserData({ ...userData, ...{ password } })
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Confirm Password"
                                    name="password2"
                                    onChange={(e) => {
                                        const confirmPassword = e.target.value;
                                        setuserData({ ...userData, ...{ confirmPassword } })
                                    }}
                                />
                            </div>
                            <input type="submit"
                                className="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register
