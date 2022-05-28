import React from 'react';

const ManageProduct = ({ product, setDeletProduct }) => {
    const { _id, name, img, description, minimumQuantity, availableQuantity, price } = product;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className="p-12" src={img} alt="" /></figure>
            <div className="card-body decoration-from-font">
                <div>
                    <hr />
                </div>
                <h2 className="card-title text-secondary">{name}</h2>
                <h6 className='card-title text-base '><span className='text-orange-600'>Minimum Quantity:</span> {minimumQuantity}</h6>
                <h6 className='card-title text-base '><span className='text-orange-600'>Available Quantity:</span> {availableQuantity}</h6>
                <h6 className='card-title text-base '><span className='text-orange-600'>Per Unit Price: </span> $ {price}</h6>
                <h6 className='card-title text-xs text-left'>{description}</h6>
                <div className="card-actions mt-3">

                    <label
                        htmlFor="delet-product-modual"
                        onClick={() => setDeletProduct(product)}
                        className="btn btn-sm relative w-full btn-error rounded-2xl text-white uppercase bg-gradient-to-r from-red-500 to-red-500"
                    >DELETE</label>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;