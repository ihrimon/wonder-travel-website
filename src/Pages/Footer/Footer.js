import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="bg-light py-5">
                <div className="container d-flex flex-wrap text-start">
                    <div className="col-lg-3 col-6">
                        <NavLink to="/">
                            <img src={logo} alt="" />
                        </NavLink>
                        <p className="mt-3 w-75">Medical care is what physicians and other clinicians do every day with you in offices, labs, surgery centers, and hospitals. </p>
                    </div>
                    <div className="col-lg-3 col-6 px-4">
                        <h5>Quick Links</h5>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Destination</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6 pe-4">
                        <h5>Other Pages</h5>
                        <ul>
                            <li>Privacy and Policy</li>
                            <li>Terms of Use</li>
                            <li>Disclaimer</li>
                            <li>FAQ</li>
                            <li>Help Center</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6 px-4">
                        <h5>Contact Info</h5>
                        <ul>
                            <li>Help Center</li>
                            <li>Doctors</li>
                            <li>Treatments</li>
                            <li>Surgery</li>
                            <li>Surgery</li>
                        </ul>
                    </div>
                </div>
                <p className="my-5 pb-5 text-center">Copyright@2021 Wonder Travel. All Rights Reserved. Create by webpixi author</p>
            </div>
        </div>
    );
};

export default Footer;