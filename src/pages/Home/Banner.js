import React from 'react';
import banner from '../../images/bg-1.jpg'

const Banner = () => {
    return (
        <div style={{
            background: `url(${banner})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen">
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Bicycle parts manufacturers</h1>
                    <p className="mb-5"></p>
                </div>
            </div>
        </div>
    );
};

export default Banner;

