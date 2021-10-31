import React from 'react';
import img from '../../../images/faq.png';

const FAQs = () => {
    return (
        <div className="container">
            <div className="text-center my-5">
                <h2>Frequently Asked Questions</h2>
                <p>Any question putting on your FAQ page on the tap navigation of your website, or place it on a pull-down menu under the Contact us section.</p>
            </div>

            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center pb-5 my-5">
                <div className="me-5 col-lg-5 col-12">
                    <img src={img} className='img-fluid' alt="" />
                </div>
                <div className="accordion col-lg-7 col-12 text-start ms-3" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How do i get started?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                A tour or simply tour is a series of concerts by an artist or group of artists in different cities, countries or locations. Often concert tours are named to differentiate different tours by the same artist and to associate a specific tour with a particular album or product.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How can I purchase the plan
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                A tour or simply tour is a series of concerts by an artist or group of artists in different cities, countries or locations. Often concert tours are named to differentiate different tours by the same artist and to associate a specific tour with a particular album or product.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How can I start accepting tour ticket?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                A tour or simply tour is a series of concerts by an artist or group of artists in different cities, countries or locations. Often concert tours are named to differentiate different tours by the same artist and to associate a specific tour with a particular album or product.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Is it safe journey for me and my family?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                A tour or simply tour is a series of concerts by an artist or group of artists in different cities, countries or locations. Often concert tours are named to differentiate different tours by the same artist and to associate a specific tour with a particular album or product.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                How many facilities for your Package plan?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                A tour or simply tour is a series of concerts by an artist or group of artists in different cities, countries or locations. Often concert tours are named to differentiate different tours by the same artist and to associate a specific tour with a particular album or product.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;