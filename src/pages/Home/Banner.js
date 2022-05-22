import React from 'react';
import banner from '../../images/bg-1.jpg'

const Banner = () => {
    return (
        <div style={{
            background: `url(${banner})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen">
            <div class="hero-overlay bg-opacity-40"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Bicycle parts manufacturers</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;