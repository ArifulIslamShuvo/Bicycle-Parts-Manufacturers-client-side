import React from 'react';
import comitted1 from '../../images/committed/rawMaterials.jpg'
import comitted2 from '../../images/committed/packing.jpg'
import comitted3 from '../../images/committed/logistics.jpg'
import comitted4 from '../../images/committed//waste.jpg'

const Committed = () => {
    return (
        <div className='hidden md:block'>
            <div class="flex px-12 py-10">
                <div class="flex-none ...">
                    <div className='px-5'>
                        <h2 className='text-4xl text-[#01151F] font-bold text-left p-5 mt-10'>Committed to Environmental Improvement</h2>
                        <p className='m-5 text-left'>-- Continuous practice of environmental management protocols and eco-friendly business guidelines.</p>
                        <p className='m-5 text-left'>-- Work with local and international bodies by complying with established environmental <br /> laws and regulations.</p>
                        <p className='m-5 text-left'>-- Consistent development of eco-friendly goods and services.
                        </p>
                        <p className='m-5 text-left'>--  Proper waste management to minimize harmful waste.
                        </p>
                        <p className='m-5 text-left'>-- Help in promoting sustainable energy through reduced energy use and conservation of resources.
                        </p>
                        <p className='m-5 text-left'>-- Partner with local communities, suppliers, and clients to promote eco-friendly activities.
                        </p>

                    </div>
                </div>
                <div class="flex-1 mt-12">
                    <div className='grid grid-cols-2 lg:grid-cols-2 gap-5'>
                        <div data-aos="fade-down-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='bg-[#01151F]'>
                            <img className='w-full' src={comitted1} alt="" />
                            <h2 className='text-white py-1'>Raw Materials</h2>
                        </div>
                        <div data-aos="fade-down-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='bg-[#01151F]'>
                            <img className='w-full' src={comitted2} alt="" />
                            <h2 className='text-white py-1'>Packing</h2>
                        </div>
                        <div data-aos="fade-up-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='bg-[#01151F]'>
                            <img className='w-full' src={comitted3} alt="" />
                            <h2 className='text-white py-1'>Logistics</h2>
                        </div>
                        <div data-aos="fade-up-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='bg-[#01151F]'>
                            <img className='w-full' src={comitted4} alt="" />
                            <h2 className='text-white py-1'>Waste</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Committed;
