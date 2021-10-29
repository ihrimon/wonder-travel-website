import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirectURL = location.state?.from || '/';

    // Redirected history URL from google login
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectURL)
            })
    }

    // Redirected history URL from Github login
    const handleGithubLogIn = () => {
        signInUsingGithub()
            .then(result => {
                history.push(redirectURL)
            })
    }

    return (
        <div className="container bg-light rounded shadow-sm p-5 my-5">
            <h2 className="mb-3">Please Login</h2>
            <button onClick={handleGoogleLogIn} className="btn btn-danger me-4">Google Login</button>
            <button onClick={handleGithubLogIn} className="btn btn-success">Github Login</button>
        </div>
    );
};

export default Login;