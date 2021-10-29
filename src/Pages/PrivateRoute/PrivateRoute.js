import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

import './PrivateRoute.css';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center spinner-style">
                <div className="d-flex justify-content-center spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName ? children : <Redirect
                to={{
                    pathname: "/sign-in",
                    state: { from: location }
                }}
            ></Redirect>
            }
        >
        </Route>
    );
};

export default PrivateRoute;