import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import bg from '../../images/bg-2.jpg'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://mighty-oasis-11967.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    const starRating = <>
        <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-success w-5 h-5 m-1" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-success w-5 h-5 m-1" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-success w-5 h-5 m-1" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-success w-5 h-5 m-1" />
        </div>
        {/* 
        {review.rating}
        */}
    </>


    return (
        <div>
            <h2 className='text-4xl text-secondary font-bold text-center my-12 text-[#01151F]'>User Reviews</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 m-5 pb-5'>
                {
                    reviews.slice(-3).map(review => <div key={review._id}>
                        <div className='bg-[#01151F] card lg:w-96 h-52 mx-auto'>
                            <div className="p-5">
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" alt='' />
                                    </div>
                                </div>
                                <h2 className=" text-[#C3A466]">{review.userName}</h2>
                                <p className=' text-white'> <span className='text-success'>{starRating}</span></p>
                                <p className=' card-title text-white text-sm'>  {review.description.slice(0, 90)}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;