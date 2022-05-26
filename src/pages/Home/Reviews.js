import React, { useEffect, useState } from 'react';
import bg from '../../images/bg-2.jpg'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    console.log(reviews);
    

    return (
        <div>
            <h2 className='text-4xl text-secondary font-bold text-center my-12'>User Reviews</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-5 pb-5'>
                {
                    reviews.slice(-3).map(review => <div key={review._id}>
                        <div>
                            <div style={{
                            background: `url(${bg})`,
                            backgroundSize: 'cover'
                        }} className= "card w-full bg-base-100 shadow-xl">
                                <div className= "card-body">
                                    <h2 className= "card-title text-success">{review.userName}</h2>
                                    <p className=' card-title text-white'> <span className='text-orange-500'>Rating: {review.rating}</span></p>
                                    <p className=' card-title text-white text-sm'>  {review.description.slice(0,80)}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;