import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Navber from './Navber';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Navber />
            <Banner />
            <Products />
            <Footer />
        </div>
    );
};

export default Home;