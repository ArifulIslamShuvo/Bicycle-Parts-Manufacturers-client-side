import React from 'react';
import customers from '../../images/icon/customers-icon-18.png'
import review from '../../images/icon/review.png'
import annul from '../../images/icon/Annual.png'

const BusninessSummary = () => {
    return (
        <div className='pb-12'>
            <h2 className='text-4xl text-secondary font-bold text-center my-12'>Busniness Summary</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-24'>
                <div className='text-center shadow-2xl rounded-lg'>
                    <div className="stat">
                        <div className="stat-figure rounded-full hidden md:block">
                            <img className='w-28' src={annul} />
                        </div>
                        <div className="stat-title">Annual revenue</div>
                        <div className="stat-value text-primary ">45K+</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>
                </div>

                <div className='text-center shadow-2xl rounded-lg'>
                    <div className="stat">
                        <div className="stat-figure text-secondary hidden md:block">
                            <div className="w-28  rounded-full">
                                <img src={review} />
                            </div>
                        </div>
                        <div className="stat-title"> Reviews</div>
                        <div className="stat-value text-secondary">50k+</div>
                        <div className="stat-desc">12% more than last month</div>
                    </div>
                </div>

                <div className='text-center shadow-2xl rounded-lg'>
                    <div className="stat">
                        <div className="stat-figure text-secondary hidden md:block">
                            <div className="w-28 rounded-full">
                                <img src={customers} />
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