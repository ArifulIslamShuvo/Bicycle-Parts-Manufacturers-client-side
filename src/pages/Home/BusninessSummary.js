import React from 'react';
import customers from '../../images/icon/customers-icon-18.png'
import review from '../../images/icon/review.png'
import annul from '../../images/icon/Annual.png'

const BusninessSummary = () => {
    return (
        <div className='pb-12'>
            <h2 className='text-4xl text-[#01151F] font-bold text-center my-12'>Busniness Summary</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-24'>
                <div className='text-center shadow-lg shadow-[#EA580C] rounded-lg transition duration-1000 ease-in-out hover:-translate-x-1 hover:scale-110'>
                    <div className="stat">
                        <div className="stat-figure rounded-full hidden md:block">
                            <img className='w-28' src={annul} alt=""/>
                        </div>
                        <div className="stat-title">Annual revenue</div>
                        <div className="stat-value text-primary ">45K+</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>
                </div>

                <div className='text-center shadow-lg shadow-[#EA580C] rounded-lg transition duration-1000 ease-in-out hover:-translate-x-1 hover:scale-110'>
                    <div className="stat">
                        <div className="stat-figure text-secondary hidden md:block">
                            <div className="w-28  rounded-full">
                                <img src={review} alt="" />
                            </div>
                        </div>
                        <div className="stat-title"> Reviews</div>
                        <div className="stat-value text-secondary">50k+</div>
                        <div className="stat-desc">12% more than last month</div>
                    </div>
                </div>

                <div className='text-center shadow-lg shadow-[#EA580C] rounded-lg transition duration-1000 ease-in-out hover:-translate-x-1 hover:scale-110'>
                     <div className="stat">
                        <div className="stat-figure text-secondary hidden md:block">
                            <div className="w-28 rounded-full">
                                <img src={customers} alt=""/>
                            </div>
                        </div>
                        <div className="stat-title">we served</div>
                        <div className="stat-value text-orange-600">100+</div>
                        <div className="stat-desc text-secondary">customers</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusninessSummary;