import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, signInWithGithub } = useAuth();
    return (
        <div className="container bg-light rounded shadow-sm p-5 my-5">
            <h2 className="mb-3">Please Login</h2>
            <button onClick={signInWithGoogle} className="btn btn-danger me-4">Google Login</button>
            <button onClick={signInWithGithub} className="btn btn-success">Github Login</button>
        </div>
    );
};

export default Login;