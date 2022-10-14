import React from 'react';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { BiArrowBack, BiCog, BiHelpCircle, BiInfoCircle, BiLock } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { RiHomeLine } from 'react-icons/ri';
import { FaAmazon, FaApple, FaGoogle } from 'react-icons/fa';
import img1 from '../../images/webflow.png';
import img2 from '../../images/shopify.png';
import img3 from '../../images/zapier.png';
import img4 from '../../images/paypla.png';
import img5 from '../../images/visa.png';
import img6 from '../../images/Gpay.png';
import img7 from '../../images/applepay.png';
import img8 from '../../images/amazonpay.png';
import img9 from '../../images/bitcoin.png';
import Mastercard from '../../images/Mastercard.png';
import bike from '../../images/bike.png';


const BusinessTransactions = () => {
    return (
        <div className='p-2'>
            <h2 className='text-5xl font-semibold py-10 text-[#01151F]'>Business Transactions Info.</h2>
            <div className='flex justify-center flex-col lg:flex-row mt-5 gap-10'>
                <div className='bg-[#01151F]  rounded-2xl w-80 mx-auto'>
                    <div className='text-left p-7'>
                        <h2 className='text-2xl font-semibold text-white '>Easy<br />
                            integration</h2>
                        <p className='text-[#c0bebe] mt-2 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur</p>
                    </div>
                    <div className='overflow-hidden py-8'>
                        <div data-aos="fade-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='flex justify-evenly gap-3 py-2 '>
                            <img className='w-32 h-12 bg-white rounded-lg' src={img1} alt="" />
                            <img className='w-32 h-12 bg-white rounded-lg' src={img2} alt="" />
                            <img className='w-32 h-12 bg-white rounded-lg' src={img3} alt="" />
                        </div>
                        <div data-aos="fade-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='flex justify-evenly gap-3 py-2'>
                            <img className='w-32 h-12 bg-white rounded-lg' src={img4} alt="" />
                            <img className='w-32 h-12 bg-white rounded-lg' src={Mastercard} alt="" />
                            <img className='w-32 h-12 bg-white rounded-lg' src={img5} alt="" />
                            <img className='w-32 h-12 bg-white rounded-lg' src={img6} alt="" />
                        </div>
                        <div data-aos="fade-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='flex justify-between gap-3 py-2'>
                            <img className=' w-32 h-12 bg-white rounded-lg' src={img7} alt="" />
                            <img className=' w-32 h-12 bg-white rounded-lg' src={img8} alt="" />
                            <img className=' w-32 h-12 bg-white rounded-lg' src={img9} alt="" />
                        </div>
                    </div>
                </div>
                {/* Saving-accounts */}
                <div className='bg-[#01151F]  rounded-2xl w-80 mx-auto'>
                    <div className='text-left p-7'>
                        <h2 className='text-2xl font-semibold text-white '>Upcoming<br />
                            Parts</h2>
                        <p className='text-[#c0bebe] mt-2 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur</p>
                    </div>
                    <div className='flex justify-center items-center gap-5 pt-8'>
                        <div className='text-center text-white'>
                            <img className='w-20 h-20 bg-[#E8F2EE] rounded-lg p-3 mx-6' src={bike} alt="" />
                            <h2 className='font-semibold'>New Bike</h2>
                            <small className='text-[#c0bebe] py-3'>400$</small>
                        </div>
                        <div className='text-center text-white'>
                            <img className='w-20 h-20 bg-[#F1DFDF] rounded-lg p-3 mx-6' src={bike} alt="" />
                            <h2 className='font-semibold'>New Bike</h2>
                            <small className='text-[#c0bebe] py-3'>400$</small>
                        </div>
                    </div>
                </div>
                <div className='bg-[#01151F]  rounded-2xl w-80 mx-auto'>
                    <div className='text-left p-7'>
                        <h2 className='text-2xl font-semibold text-white '>Instant<br />transactions</h2>
                        <p className='text-[#c0bebe] mt-2 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur</p>
                    </div>
                    {/*  */}
                    <div className='py-3'>
                        {/* Apple Electronic*/}
                        <div data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='flex justify-between items-center mx-5 p-3 my-2 bg-white rounded-md'>
                            <div className='flex justify-start items-center gap-5'>
                                <div className='bg-secondary text-white rounded-md p-3'>
                                    <FaApple />
                                </div>
                                <div className='text-left'>
                                    <p className='font-semibold'>Apple</p>
                                    <small>Electronic</small>
                                </div>
                            </div>
                            <div className='text-left'>
                                <p className='font-semibold'>-799$</p>
                            </div>
                        </div>
                        {/* Amazon*/}
                        <div data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='flex justify-between items-center mx-5 p-3 my-2 bg-white rounded-md'>
                            <div className='flex justify-start items-center gap-5'>
                                <div className='bg-secondary text-white rounded-md p-3'>
                                    <FaAmazon />
                                </div>
                                <div className='text-left'>
                                    <p className='font-semibold'>Amazon</p>
                                    <small>Shopping</small>
                                </div>
                            </div>
                            <div className='text-left'>
                                <p className='font-semibold'>-99$</p>
                            </div>
                        </div>
                        {/* Google Play Store*/}
                        <div data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='flex justify-between items-center mx-5 p-3 my-2 bg-white rounded-md'>
                            <div className='flex justify-start items-center gap-5'>
                                <div className='bg-secondary text-white rounded-md p-3'>
                                    <FaGoogle />
                                </div>
                                <div className='text-left'>
                                    <p className='font-semibold'>Google Play Store</p>
                                    <small>Apps</small>
                                </div>
                            </div>
                            <div className='text-left'>
                                <p className='font-semibold'>-99$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessTransactions;