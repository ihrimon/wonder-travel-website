import React from 'react';
import Banner from './Banner/Banner';
import FAQs from './FAQ,\'s/FAQs';
import Packages from './Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <FAQs></FAQs>
        </div>
    );
};

export default Home;