import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='img-banner'>
            <div className="container border py-5">
                <div className="text-center">
                    <h1>Wonder Travel and Adventure</h1>
                    <h2>Where would you like to go?</h2>
                    <Link to="/about"><button className="btn btn-outline-light rounded-0 px-3" type="submit" >See More...</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;