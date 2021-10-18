import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/UserSlice'


const Header = (props) => {

    const info = useSelector((state) => state.user)
    console.log(info)
    const dispatch = useDispatch()

    const logoutUser = () => {
        dispatch(logout())

    }

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
                                {info.userCred.accountType == "ADMIN" ? <Link className="nav-link" to="/addBooks">
                                    Add Books
                                </Link> : ""}
                            </li>
                            <li className="nav-item">
                                {
                                    !info.isLoggedIn ?
                                        <Link className="nav-link" to="/bookPage">

                                        </Link> :
                                        <Link className="nav-link" to="/bookPage">
                                            Book Page
                                        </Link>
                                }
                            </li>

                        </ul>
                        {
                            info.isLoggedIn ? <form>
                                <input className="searchBox" type="text" placeholder="Search Here" />
                            </form> : ""
                        }


                        {
                            !info.isLoggedIn ? <>
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
                                    <li className="nav-item shopCart">
                                        <i class="fas fa-shopping-cart"></i>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="#">
                                            {info.userCred.email}
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={logoutUser} >
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



export default Header
