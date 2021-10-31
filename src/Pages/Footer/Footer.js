/* import React from 'react';
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

export default Footer; */


import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import logo from '../../images/logo1.png';

import './Footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer pb-5">
            <div className="container mt-5 pt-5 pb-3">
                <div>
                    <div className="row">
                        <div className="col-6 col-lg-3 text-start">
                            <ul className="important-list p-0 px-lg-4">
                                <li className="text-start">Quick Links</li>
                                <li className="text-start">Home</li>
                                <li className="text-start">About us</li>
                                <li className="text-start">Contact</li>
                            </ul>
                            <NavLink to="/">
                                <img src={logo} alt="" />
                            </NavLink>
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="important-list p-0 px-lg-4">
                                <li className="text-start">Other pages</li>
                                <li className="text-start">My orders</li>
                                <li className="text-start">Manage all orders</li>
                                <li className="text-start">Add services</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="important-list p-0 px-lg-4">
                                <li className="text-start">Contact Info</li>
                                <li className="text-start my-1"><IoLocationSharp className="me-1" style={{ color: '#e8604c' }} /> 123 street, California</li>
                                <li className="text-start my-1"><BsFillTelephoneFill className="me-1" style={{ color: '#e8604c' }} />+8801322810867</li>
                                <li className="text-start my-1"><MdEmail className="me-1" style={{ color: '#e8604c' }} />wonder.world@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="important-list p-0 px-lg-4">
                                <li className="text-start mb-1">Make a reservation</li>
                                <li className="text-start mt-1 mb-2" style={{ lineHeight: 1.6 }}>Our team is always available 24/7 to answer your queries</li>
                                <li className="text-start mt-1">
                                    <button className="rounded-pill btn theme-btn my-2" type="tel">+8801322810867</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-5 mb-0 pb-5">Copyright ©wonder travel-2021 | This website is made by Imam Hassan Rimon</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;