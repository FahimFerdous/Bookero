import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LoginAuthAction } from '../../redux/actions/AuthAction';

const Login = (props) => {
    const { cred, login } = props;
    let history = useHistory();

    const [userCred, setuserCred] = useState({})
    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Log In</h1>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            console.log(userCred)
                            login(userCred, history)
                        }}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Email Address"
                                    name="email"
                                    onChange={(e) => {
                                        const email = e.target.value;
                                        setuserCred({ ...userCred, ...{ email } })
                                    }}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Password"
                                    name="password"
                                    onChange={(e) => {
                                        const pass = e.target.value;
                                        setuserCred({ ...userCred, ...{ pass } })
                                    }}
                                    required
                                />
                            </div>
                            <input type="submit" className="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStatetoProps = (state) => {
    return {
        cred: state,
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        login: (userCred, history) => {
            dispatch(LoginAuthAction(userCred, history))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Login)
