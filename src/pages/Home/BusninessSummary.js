import React from 'react';
import customers from '../../images/icon/customers-icon-18.png'
import review from '../../images/icon/review.png'
import annul from '../../images/icon/Annual.png'

const BusninessSummary = () => {
    return (
        <div className='pb-12'>
            <h2 className='text-center text-primary text-4xl py-5'>Busniness Summary</h2>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="w-12 rounded-full">
                            <img src={annul} />
                        </div>
                    </div>
                    <div className="stat-title">Annual revenue</div>
                    <div className="stat-value text-primary">45K+</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="w-12 rounded-full">
                            <img src={review} />
                        </div>
                    </div>
                    <div className="stat-title"> Reviews</div>
                    <div className="stat-value text-secondary">50k+</div>
                    <div className="stat-desc">12% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-12 rounded-full">
                                <img src={customers} />
                            </div>
                        </div>
                    </div>
                    <div className="stat-title">we served</div>
                    <div className="stat-value text-orange-600">100+</div>
                    <div className="stat-desc text-secondary">customers</div>
                </div>
            </div>
        </div>
    );
};

export default BusninessSummary;