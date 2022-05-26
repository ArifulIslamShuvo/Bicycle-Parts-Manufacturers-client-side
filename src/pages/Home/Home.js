import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusninessSummary from './BusninessSummary';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <BusninessSummary />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;