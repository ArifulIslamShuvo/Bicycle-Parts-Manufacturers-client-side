import React from 'react';
import customers from '../../images/icon/customers-icon-18.png'
import review from '../../images/icon/review.png'
import annul from '../../images/icon/Annual.png'

const BusninessSummary = () => {
    return (
        <div className='pb-12'>
            <h2 className='text-center text-primary text-4xl py-5'>Busniness Summary</h2>
            <div class="stats shadow">
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <div class="w-12 rounded-full">
                            <img src={annul} />
                        </div>
                    </div>
                    <div class="stat-title">Annual revenue</div>
                    <div class="stat-value text-primary">45K+</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <div class="w-12 rounded-full">
                            <img src={review} />
                        </div>
                    </div>
                    <div class="stat-title"> Reviews</div>
                    <div class="stat-value text-secondary">50k+</div>
                    <div class="stat-desc">12% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <div class="avatar online">
                            <div class="w-12 rounded-full">
                                <img src={customers} />
                            </div>
                        </div>
                    </div>
                    <div class="stat-title">we served</div>
                    <div class="stat-value text-orange-600">100+</div>
                    <div class="stat-desc text-secondary">customers</div>
                </div>
            </div>
        </div>
    );
};

export default BusninessSummary;