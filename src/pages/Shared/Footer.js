import React from 'react';
import './Footer.css';
import icon from "../../images/alchemy-bikes-logo-gold.png"


const Footer = () => {
    return (
        <footer id='footer' className='pt-10'>
            <footer className="footer p-10 text-base-content mt-5 text-white">
                <div>
                     {/* <p className='text-2xl text-primary font-semibold'>BikeParts.</p> */}
                     {/* <a className="btn btn-ghost normal-case text-3xl text-rose-700">Bike <span className='text-white'>parts</span></a> */}
                     <img src={icon} className="h-[80px] p-2" alt='' />
                </div>
                <div className="text-base">
                    <span className="footer-title">About</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className="text-base">
                    <span className="footer-title">Blog</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className="text-base">
                    <span className="footer-title">Webflow</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div className="text-base">
                    <span className="footer-title">Social Media</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t text-base-content border-base-300">
                <div className="items-center grid-flow-col text-white">
                    <p>©  Made by <span className='text-[#19D2AD]'>Pawel Gola</span> - Powered by <span className='text-[#19D2AD]'>Webflow</span></p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-white">
                        <p>Impressum</p>
                        <p>Datenschutz</p>
                    </div>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;