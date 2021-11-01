import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='img-banner'>
            <div className="container">
                <div className="d-flex flex-lg-row flex-column align-items-center">
                    <div className="col-12 pt-5 pt-lg-0 text-light text-left color-theme">
                        <h1 className="text-size mt-3 text-stroke" >BEST WONDER TRAVEL AND ADVENTURE</h1>
                        <p className="w-75 mx-auto">Tour means visit to a place or area, especially one during which you look around the place.Tour means visit to a place or area, especially one during which you look around the place. Tour means visit to a place or area, especially one during which you look around the place.
                        </p>
                        <Link to="/login"><button className="btn theme-button rounded-0 px-4 mb-3" type="submit" >See More...</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;