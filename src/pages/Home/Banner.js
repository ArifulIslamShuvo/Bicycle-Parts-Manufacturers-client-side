import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import banner from '../../images/bg-1.jpg'

const Banner = () => {
    return (
        <div style={{
            background: `url(${banner})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen">
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Bicycle parts manufacturers</h1>
                    <p className="px-10 text-2xl text-white p-5">Anyone can log in to this website with an email and password and google authentication. Users can order products. and All orders of the user will be displayed on his my order page.All users can give a review. Ordinary user and admin's route has been separated.</p>
                    <button className='bg-secondary text-white p-3 mt-4 rounded-xl shadow-lg transition duration-700 ease-in-out  hover:-translate-x-1 hover:scale-110 '><Link className='font-bold mr-2 text-xl flex justify-between items-center gap-4' to="/login">Click-here <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>

                    </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

