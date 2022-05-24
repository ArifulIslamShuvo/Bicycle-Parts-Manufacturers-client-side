import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [user, loading] = useAuthState(auth);
    const { id } = useParams();

    const [parts, setParts] = useState({});
    const { name, img, description, minimumQuantity, availableQuantity, price } = parts;

    useEffect(() => {
        fetch(`http://localhost:5000/partses/${id}`)
            .then(res => res.json())
            .then(data => setParts(data));

    }, [id, parts]);

    const handleBooking = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
    }


    return (

            <div className='flex h-screen justify-center items-center my-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold text-secondary">Purchase</h2>
                        <hr />

                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        
                            <h6 className='card-title text-base '><span className='text-orange-600'>Parts Name :</span> {name}</h6>
                            <h6 className='card-title text-base '><span className='text-orange-600'>Minimum Quantity:</span> {minimumQuantity}</h6>
                            <h6 className='card-title text-base '><span className='text-orange-600'>Available Quantity:</span> {availableQuantity}</h6>
                            <h6 className='card-title text-base '><span className='text-orange-600'>Price: $</span> {price}</h6>
                            <h6 className='card-title text-xs text-left'>{description}</h6>

                            <input type="email" name='email' readOnly value={user?.displayName} className="input input-bordered input-secondary w-full max-w-xs" />
                            <input type="email" name='email' readOnly value={user?.email} className="input input-bordered input-secondary w-full max-w-xs" />
                            <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-secondary w-full max-w-xs" />
                            <input type="text" name='address' placeholder="Address" className="input input-bordered input-secondary w-full max-w-xs" />
                            <input type="number" name='quantity' placeholder=" Order Quantity" className="input input-bordered input-secondary w-full max-w-xs" />
                            
                            <input type="submit" value="Order" className="btn btn-secondary w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Purchase;