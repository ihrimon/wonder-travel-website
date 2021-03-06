import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import SinglePackage from '../Service/SinglePackage';

import './Packages.css';

const Packages = () => {
    const [packages, setServices] = useState([])
    useEffect(() => {
        fetch('https://evening-brushlands-52503.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const { isLoading } = useAuth();
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
        <div>
            <div className="container my-5">
                <h2 className="mb-4 text-center theme-color">Best Package For Your Travel
                </h2>
                <div className="row row-cols-1 row-cols-md3 g-4">
                    {
                        packages.map(singlePackage => <SinglePackage
                            key={singlePackage._id}
                            singlePackage={singlePackage}
                        ></SinglePackage>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Packages;