import React from 'react';
import { toast } from 'react-toastify';
import bg from '../../images/bg-2.jpg';

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const minimumQuantity = event.target.minimumQuantity.value;
        const availableQuantity = event.target.availableQuantity.value;
        const price = event.target.price.value;
        const description = event.target.description.value;

        const products = { name, img, minimumQuantity, availableQuantity, price, description};
        console.log(products);

        const url = `https://mighty-oasis-11967.herokuapp.com/partses`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success(" Add Product Successfully");
                }
            })
    }
    return (
        <div>
            <h2>Add Product</h2>
            <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen overflow-hidden">
            <div className="hero-content p-12">
                <div className="card max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleAddProduct}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-center text-2xl font-bold text-secondary px-28">Add Product</span>
                                </label>
                                <input type="text" name='name'placeholder="Products Name" required className="input input-bordered input-secondary w-full max-w-lg mb-2"/>
                                <input type="text" name='img'placeholder="Image URL" required className="input input-bordered input-secondary w-full max-w-lg mb-2"/>
                                <input type="text" name='minimumQuantity'placeholder="Minimum Quantity" required className="input input-bordered input-secondary w-full max-w-lg mb-2"/>
                                <input type="text" name='availableQuantity'placeholder="Available Quantity" required className="input input-bordered input-secondary w-full max-w-lg mb-2"/>
                                <input type="number" name='price'placeholder=" Per Unit Price" required className="input input-bordered input-secondary w-full max-w-lg mb-2"/>
                            </div>
                            <textarea type="text" name='description' placeholder='Product Description' className="input input-bordered input-secondary w-full max-w-lg" />
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddProduct;