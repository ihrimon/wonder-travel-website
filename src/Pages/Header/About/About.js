import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/about.png'

const About = () => {
    return (
        <div>
            <div className="container d-flex flex-lg-row flex-column align-items-lg-center justify-content-between mt-5">
                <div className="col-lg-6 col-12 me-5">
                    <img src={img} className="w-100" alt="" />
                </div>
                <div className=" col-lg-6 col-12 text-start">
                    <h5 className="text-danger">The most wonderful Travel Tour</h5>
                    <h1>Plan Your Trip with Wonder Travel</h1>
                    <p>Very Safe, Private, And Spacious Luxury Homes. We'll Help You Go life Safely. Travel Safely With the wonder travel for $2,500 Per Month With No Nightly Rates, Taxes or Fees. First-Class Service.</p>
                    <Link to="/packages"><button className="btn btn-outline-danger mt-4 rounded-0" type="submit" >Book Package Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;