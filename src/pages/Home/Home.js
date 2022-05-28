import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusninessSummary from './BusninessSummary';
import Committed from './Committed';
import FutterBanaer from './FutterBanaer';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <BusninessSummary />
            <Reviews />
            <Committed />
            <FutterBanaer />
            <Footer />
        </div>
    );
};

export default Home;