import React, { useState } from 'react';
import bg from '../../images/bg-2.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const UserReview = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleReview = event => {
        event.preventDefault();
        const userName = user?.displayName;
        const rating = event.target.rating.value;
        const description = event.target.description.value;

        const review = { userName, rating, description };
        console.log(review);

        const url = `https://mighty-oasis-11967.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success(" Order Successfully");
                }
            })
    }
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen overflow-hidden">
            <div className="hero-content p-12">
                <div className="card max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleReview}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-center text-2xl font-bold text-secondary px-24">Review Form</span>
                                </label>
                                <input type="text" name='name' readOnly value={user?.displayName} className="input input-bordered input-secondary w-full max-w-lg" />
                            </div>
                            <select name="rating" className="input input-bordered input-secondary w-full max-w-lg">
                                <option disabled selected>
                                    Rating
                                </option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <textarea type="text" name='description' placeholder='Description' className="input input-bordered input-secondary w-full max-w-lg" />
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserReview;