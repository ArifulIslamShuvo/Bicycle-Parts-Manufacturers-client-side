import React from 'react';
import banner from '../../images/2022-Alchemy-About-Header.jpg'
import img1 from '../../images/our-story-img2.png'
import img2 from '../../images/our-story-img4.jpg'
import img3 from '../../images/our-story-img5.jpg'
import img4 from '../../images/our-story-img6.jpg'
import Footer from '../Shared/Footer';

const About = () => {
    return (
        <div>
            <div style={{
                background: `url(${banner})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'
            }} className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="pb-96 -mt-36 text-5xl font-bold text-white">ABOUT ALCHEMY</h1>
                    </div>
                </div>
                <div className='lg:mt-96'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 m-5 pb-5 px-20'>
                        <div data-aos="fade-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='lg:text-left lg:mt-20 mt-48'>
                            <h2 className='text-4xl text-[#01151F] pb-3 font-semibold'>TO BUILD A BETTER RIDE EXPERIENCE</h2>
                            <p>We are a team of fabricators with a simple goal: To build and deliver the best ride experience you will ever have. This goal moves everything we do, from engineering and prototyping, which includes crafting everything down to the last little detail on the bike, to our long-term relationships with our riders. Because of this goal, we guarantee your bike will match your unique style and exceed your expectations.</p>
                        </div>
                        <div data-aos="fade-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={img1} alt='' />
                        </div>
                    </div>
                    {/*  */}
                    <div data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className='lg:text-left lg:ml-96 p-10'>
                        <h2 className='text-4xl text-[#01151F] pb-3 font-semibold'>DIRECT-TO-RIDER</h2>
                        <p>The traditional bike shop model is great for selling bikes.  However, we believe that our direct-to-rider process guarantees that you’ll get a bike you’ll love to ride.  We won’t sell you what we happen to have in stock.  We will work one-on-one with you to craft the best bike for your riding style and have it right at your doorstep.  In fact, if we don’t think we can deliver the perfect bike to you, we won’t.</p>
                    </div>
                    {/*  */}
                    <div className='lg:text-left text-2xl p-10'>
                        <h2 className='p-2'>BUILD THE BEST RIDING,</h2>
                        <h2 className='p-2'>HIGHEST PERFORMING, MOST</h2>
                        <h2 className='p-2'>BEAUTIFULLY CRAFTED BIKES</h2>
                        <h2 className='p-2'>IN THE WORLD.</h2>

                    </div>
                    {/*  */}
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-12 bg-[#01151F] my-10'>
                        <div className=' w-96 lg:text-left text-white'>
                            <h2 className='text-4xl pb-3 font-semibold'>TO BUILD A BETTER RIDE EXPERIENCE</h2>
                            <p data-aos="fade-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">We are a team of fabricators with a simple goal: To build and deliver the best ride experience you will ever have. This goal moves everything we do, from engineering and prototyping, which includes crafting everything down to the last little detail on the bike, to our long-term relationships with our riders. Because of this goal, we guarantee your bike will match your unique style and exceed your expectations.</p>
                        </div>
                        <div data-aos="fade-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={img2} className="lg:-mt-60 w-96 lg:w-full" alt='' />
                        </div>
                    </div>
                    {/*  */}
                    <div data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className='px-10 pt-5'>
                        <p>Founded in 2008, Alchemy Bicycles designs and builds the best riding road, all-road, gravel, and mountain bikes available.  We are dedicated to the crafting carbon fiber and titanium into the highest performing and best riding bike you will ever have.  Our direct-to-rider approach delivers a one-of-kind bike built for the unique style of each individual rider direct from our workshop in Colorado.</p>
                    </div>
                    {/*  */}
                    <div className='flex flex-col lg:flex-row justify-center items-center'>
                        <div data-aos="fade-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src={img3} className="lg:p-20 pb-0" alt='' />
                        </div>
                        <div className='w-96 lg:text-left text-xl text-[#D0B37F]'>
                            <p data-aos="fade-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">We are a team of fabricators with a simple goal: To build and deliver the best ride experience you will ever have. This goal moves everything we do, from engineering and prototyping, which includes crafting everything down to the last little detail on the bike, to our long-term relationships with our riders. Because of this goal, we guarantee your bike will match your unique style and exceed your expectations.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className='lg:w-[500px] mx-auto'>
                        <img src={img4} className="pb-20 lg:-mt-40 lg:ml-36" alt='' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;