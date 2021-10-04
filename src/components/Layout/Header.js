import React from 'react'
import { connect } from 'react-redux'

const Header = (props) => {

    let isLoggedIn = false;

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        BOOKEROO
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/dashboard">
                                    Dashboard
                                </a>
                            </li>

                        </ul>

                        {
                            !isLoggedIn ? <>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link " href="register">
                                            Sign Up
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="login">
                                            Login
                                        </a>
                                    </li>
                                </ul>
                            </> : <>

                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link " href="register">
                                            UserName
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="login">
                                            Logout
                                        </a>
                                    </li>
                                </ul>

                            </>
                        }
                    </div>
                </div>
            </nav>
        </div>

    )
}

const mapStatetoProps = (state) => {
    return {
        auth: state,
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        login: (userCred, history) => {

        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Header)
