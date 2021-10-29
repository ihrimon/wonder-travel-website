import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    const activeStyle = {
        fontWeight: "bold",
        color: "green"
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light py-3 bg-light">
                <div className="container">
                    <NavLink to="/">
                        <img src={logo} alt="" />
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={activeStyle} to="/packages">Packages</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={activeStyle} to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={activeStyle} to="/myOrders">My Orders</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={activeStyle} to="/manageOrders">Manage Orders</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={activeStyle} to="/addPackages">Add Packages</NavLink>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {
                                    ((user.displayName) && (user.photoURL)) &&
                                    <div className="user rounded-pill mx-lg-0 mx-auto py-1 px-2 mt-1 d-flex align-items-center">
                                        <img src={user.photoURL} className="rounded-pill user-img" alt="" />
                                        <p className="ms-2 my-2 fw-bold">{user.displayName}</p>
                                    </div>
                                }
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/login">
                                    {(user.displayName) && (user.photoURL) ?
                                        <button onClick={logOut} className="btn btn-outline-primary ms-2">Sign Out</button> :
                                        <NavLink to="/login"><button className="btn btn-primary me-1" type="submit" >Sign In</button></NavLink>
                                    }
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;