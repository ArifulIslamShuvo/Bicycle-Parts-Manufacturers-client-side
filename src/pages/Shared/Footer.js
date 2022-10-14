import React from 'react';
import './Footer.css';
import icon from "../../images/alchemy-bikes-logo-gold.png"
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineYoutube } from 'react-icons/ai';


const Footer = () => {
    return (
        <footer id='footer' className='pt-10'>
            <div>
                <img src={icon} className="h-[60px] p-2 ml-6" alt='' />
            </div>
            <footer className="footer px-10 py-5 text-base-content">
                <div className="text-base text-white">
                    <span className="footer-title ">Customer Service</span>
                    <a className="link link-hover hover:text-[#A68959]"> My Account</a>
                    <a className="link link-hover hover:text-[#A68959]">Shipping</a>
                    <a className="link link-hover hover:text-[#A68959]">Guarantee</a>
                </div>
                <div className="text-base text-white">
                    <span className="footer-title">Connect</span>
                    <a className="link link-hover flex items-center gap-4 hover:text-[#A68959]"><FiPhoneCall /> <span>Call Us +1 720.772.4435</span></a>
                    <a className="link link-hover flex items-center gap-4 hover:text-[#A68959]"><AiOutlineMail /> <span>Send an Email</span></a>
                    <a className="link link-hover flex items-center gap-4 hover:text-[#A68959]"><AiOutlineInstagram /> <span>Instagram</span></a>
                    <a className="link link-hover flex items-center gap-4 hover:text-[#A68959]"><AiOutlineFacebook /> <span>Facebook</span></a>
                    <a className="link link-hover flex items-center gap-4 hover:text-[#A68959]"><AiOutlineYoutube /> <span>Youtube</span></a>

                </div>
                <div className="text-base text-white">
                    <span className="footer-title">Explore</span>
                    <div className='flex gap-5'>
                        <div className='flex flex-col text-left'>
                            <a className="link link-hover hover:text-[#A68959]">About</a>
                            <a className="link link-hover hover:text-[#A68959]">FAQs</a>
                            <a className="link link-hover hover:text-[#A68959]">Contact</a>
                            <a className="link link-hover hover:text-[#A68959]">Blog</a>
                        </div>
                        <div className='flex flex-col text-left'>
                            <a className="link link-hover hover:text-[#A68959]">Affiliates</a>
                            <a className="link link-hover hover:text-[#A68959]">Careers</a>
                            <a className="link link-hover hover:text-[#A68959]">Service Centers</a>
                            <a className="link link-hover hover:text-[#A68959]">Media</a>
                        </div>

                    </div>
                </div>
                <div className="text-base ">
                    <span className="footer-title text-white">Newsletter</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="text-white">Enter your email address</span>
                            </label>
                            <div className="relative text-black">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-success absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
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