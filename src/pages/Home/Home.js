import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusninessSummary from './BusninessSummary';
import Navber from './Navber';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Navber />
            <Banner />
            <Products />
            <BusninessSummary />
            <Footer />
        </div>
    );
};

export default Home;