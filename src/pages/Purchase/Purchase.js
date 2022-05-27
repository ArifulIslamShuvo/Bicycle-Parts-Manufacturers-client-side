import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [user, loading] = useAuthState(auth);
    const { id } = useParams();

    const [parts, setParts] = useState({});
    const { _id, name, img, description, minimumQuantity, availableQuantity, price } = parts;

    useEffect(() => {
        fetch(`https://mighty-oasis-11967.herokuapp.com/partses/${id}`)
            .then(res => res.json())
            .then(data => setParts(data));

    }, [id, parts]);

    const [qerror, setQerror] = useState('');

    const handleOrder = event => {
        event.preventDefault();
        const partsId = _id;
        const partsName = name;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const quantity = event.target.quantity.value;
        const PerUnitPrice = price;

        const order = { partsId, partsName, userName, userEmail, phone, address, PerUnitPrice, quantity };


        if (parseInt(quantity) < parseInt(minimumQuantity) || parseInt(quantity) > parseInt(availableQuantity)) {
            const erreormessage = <p className='text-red-600 text-center text-sm'>minimum order {minimumQuantity} pieces nad Maximum order {availableQuantity}</p>
            setQerror(erreormessage);
        }
        else {
            setQerror('')

            const url = `https://mighty-oasis-11967.herokuapp.com/order`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        toast.success(" Order Successfully");
                    }
                })
        }
    }


    return (
        <div className='flex h-screen justify-center items-center my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-secondary">Order Form</h2>
                    <hr />

                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>

                        <h6 className='card-title text-base '><span className='text-orange-600'>Parts Name :</span> {name}</h6>
                        <h6 className='card-title text-xs'><span className='text-orange-600'>Minimum Quantity:</span> {minimumQuantity}</h6>
                        <h6 className='card-title text-xs'><span className='text-orange-600'>Available Quantity:</span> {availableQuantity}</h6>
                        <h6 className='card-title text-xs'><span className='text-orange-600'>Per Unit Price:</span> $ {price}</h6>
                        <h6 className='card-title text-xs text-left'>{description}</h6>

                        <input type="text" name='name' readOnly value={user?.displayName} className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="email" name='email' readOnly value={user?.email} className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" required className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Address" required className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="number" name='quantity' placeholder=" Order Quantity" required className="input input-bordered input-secondary w-full max-w-xs" />
                        {qerror}
                        <input type="submit" value="Place Order" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;