import React from 'react';
import { FaApple, FaGoogle, FaAmazon, FaTwitter } from 'react-icons/fa';
import { RiHomeLine } from 'react-icons/ri';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';

const Transaction = () => {
    return (
        <div className='flex justify-center items-center gap-40 my-24 flex-col lg:flex-row'>
            <div className=' items-center'>
                <div className='text-left'>
                <p className=''>Transactions</p>
                <h2 className='text-4xl font-semibold text-[#01151F]'>Send & receive <br /> money instantly</h2>
                <p className='py-1 w-[300px] lg:w-[450px] '>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <p className='flex items-center gap-2 my-2'><small className='rounded-full bg-secondary text-white p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </small>
                        <span>Malesuada Ipsum</span>
                    </p>
                    <p className='flex items-center gap-2 my-2'><small className='rounded-full bg-secondary text-white p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </small>
                        <span>Vestibulum</span>
                    </p>
                    <p className='flex items-center gap-2 my-2'><small className='rounded-full bg-secondary text-white p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </small>
                        <span>Parturient Lorem</span>
                    </p>
                </div>
                </div>
            </div>
                {/* pgohe */}
                <div className='border-8 py-2 border-[#01151F] lg:w-96' style={{ borderRadius: "45px" }}>
                    <div className='flex items-center justify-around gap-5 py-2'>
                        <p>Current balance</p>
                        <p className='text-2xl font-semibold'>$ 4.658,50</p>
                    </div>
                    {/* send money and receive money design */}

                    <div className='flex justify-around'>
                        <div className='flex items-center gap-2 my-2'>
                            <p className='rounded-full bg-secondary text-white p-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </p>
                            <p>Send Money</p>
                        </div>
                        <div className='flex items-center gap-2 my-2'>
                            <p className='rounded-full bg-secondary text-white p-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </p>
                            <p>Receive Money</p>
                        </div>
                    </div>
                    {/* send money and receive money design end */}
                    <div className='flex justify-around items-center gap-20'>
                        <p className='text-lg font-semibold'>Transactions</p>
                        <div className='text-secondary flex items-center gap-2 my-2'>
                            <p>View all</p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </p>
                        </div>
                    </div>
                    {/* multiple option */}
                    <div className='py-3 text-white'>
                        {/* Apple Electronic*/}
                        <div data-aos="fade-up-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='flex justify-between items-center mx-5 p-3 my-2 bg-[#01151F] rounded-md'>
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
                        {/* Google Play Store*/}
                        <div data-aos="fade-up-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='flex justify-between items-center mx-5 p-3 my-2 bg-[#01151F] rounded-md'>
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
                                <p className='font-semibold'>-49$</p>
                            </div>
                        </div>
                        {/* Amazon*/}
                        <div data-aos="fade-up-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='flex justify-between items-center mx-5 p-3 my-2 bg-[#01151F] rounded-md'>
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
                                <p className='font-semibold'>-59$</p>
                            </div>
                        </div>
                        {/* Twitter*/}
                        <div data-aos="fade-up-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='flex justify-between items-center mx-5 p-3 my-2 bg-[#01151F] rounded-md'>
                            <div className='flex justify-start items-center gap-5'>
                                <div className='bg-secondary text-white rounded-md p-3'>
                                    <FaTwitter />
                                </div>
                                <div className='text-left'>
                                    <p className='font-semibold'>Twitter</p>
                                    <small>Ads</small>
                                </div>
                            </div>
                            <div className='text-left'>
                                <p className='font-semibold'>-9$</p>
                            </div>
                        </div>
                        {/* phone menu */}
                        <div className='flex justify-around py-1 text-secondary'>
                            <div className=' flex flex-col justify-center items-center'>
                                <RiHomeLine />
                                <p>Home</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p>Savings</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <AiOutlineCreditCard />
                                <p>Cards</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <FiUser />
                                <p>Account</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Transaction;