import React from 'react';
import Banner from './Banner';
import Navber from './Navber';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Navber />
            <Banner />
            <Products />
        </div>
    );
};

export default Home;