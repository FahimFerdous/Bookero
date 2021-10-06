import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
const Landing = () => {
    const info = useSelector((state) => state.user.isLoggedIn)
    return (
        <div className="landing">
            <div className="light-overlay landing-inner text-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-3 mb-4">
                                BOOKEROO
                            </h1>
                            <p className="lead">
                                Create your account to join
                            </p>
                            <hr />
                            <Link className="btn btn-lg btn-primary mr-2" to="/register">
                                Sign Up
                            </Link>
                            {
                                info ? <Link className="btn btn-lg btn-secondary mr-2" to="/login">
                                    Logout
                                </Link> :
                                    <Link className="btn btn-lg btn-secondary mr-2" to="/login">
                                        Login
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Landing