import React from 'react';
import Banner from './Banner/Banner';
import Booking from './Booking/Booking';
import FAQs from './FAQ,\'s/FAQs';
import Packages from './Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Booking></Booking>
            <Packages></Packages>
            <FAQs></FAQs>
        </div>
    );
};

export default Home;