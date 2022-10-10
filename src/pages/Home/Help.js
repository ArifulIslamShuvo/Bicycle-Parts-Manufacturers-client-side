import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { BiInfoCircle } from 'react-icons/bi';
import { FiArrowRight } from 'react-icons/fi';

const Help = () => {
    return (
        <div className='flex gap-48 justify-center  flex-col lg:flex-row py-32'>
            <div>
                <h2 className='text-5xl font-semibold pb-10 text-left'>Need help?</h2>
                <div>
                    <div className='flex justify-start items-center gap-3 text-left py-2 '>
                        <div className='rounded-full bg-secondary text-[#fff] p-2'>
                            <AiFillPhone className='w-6 h-6 rotate-90' />
                        </div>
                        <div>
                            <p className='text-md font-semibold'>+49 176 123 456</p>
                            <small>Support Hotline</small>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-3 text-left py-2 '>
                        <div className='rounded-full bg-secondary text-[#fff] p-2'>
                            <AiOutlineMail className='w-6 h-6' />
                        </div>
                        <div>
                            <p className='text-md font-semibold'>help@bikeparts.com</p>
                            <small>Support Email</small>
                        </div>
                    </div>
                    <div className=' p-2 flex justify-start items-center gap-2 text-left text-primary'>
                        <p>Support</p>
                        <FiArrowRight />
                    </div>
                </div>
            </div>
            {/* --------- */}
            <div className='lg:text-left'>
                <details class="bg-gray-00  duration-100">
                    <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">How do I order a customized product?</summary>
                    <div class="bg-white px-5 py-3  border w-96 border-gray-100 text-sm font-light">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.</p>
                    </div>
                </details>
                <details class="bg-gray-00  duration-100">
                    <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">How do I order a new card?</summary>
                    <div class="bg-white px-5 py-3  border w-96 border-gray-100 text-sm font-light">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.</p>
                    </div>
                </details>
                <details class="bg-gray-00  duration-100">
                    <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">How to change my account limits?</summary>
                    <div class="bg-white px-5 py-3  border w-96 border-gray-100 text-sm font-light">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.</p>
                    </div>
                </details>
                <details class="bg-gray-00  duration-100">
                    <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">How to change my account limits?</summary>
                    <div class="bg-white px-5 py-3  border w-96 border-gray-100 text-sm font-light">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.</p>
                    </div>
                </details>
            </div>

        </div>
    );
};

export default Help;