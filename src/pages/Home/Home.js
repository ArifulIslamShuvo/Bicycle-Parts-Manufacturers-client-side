import React from 'react';
import Footer from '../Shared/Footer';
import BusinessTransactions from './BusinessTransactions';
import Banner from './Banner';
import BusninessSummary from './BusninessSummary';
import Committed from './Committed';
import FutterBanaer from './FutterBanaer';
import Help from './Help';
import Products from './Products';
import Reviews from './Reviews';
import Transaction from './Transaction';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Committed />
            <FutterBanaer />
            <Transaction />
            <BusinessTransactions />
            <BusninessSummary />
            <Reviews />
            <Help />
            <Footer />
        </div>
    );
};

export default Home;