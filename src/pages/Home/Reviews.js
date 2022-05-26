import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-5'>
                {
                    reviews.slice(-3).map(review => <div key={review._id}>
                        <div>
                            <div className= "card w-full bg-base-100 shadow-xl  bg-rose-400">
                                <div className= "card-body">
                                    <h2 className= "card-title text-white">{review.userName}</h2>
                                    <p className=' card-title text-white'>Description: {review.description}</p>
                                    <p className=' card-title text-white'>Rating: {review.rating}</p>
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