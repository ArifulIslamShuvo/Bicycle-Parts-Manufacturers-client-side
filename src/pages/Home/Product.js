import React from 'react';

const Product = ({ product }) => {
    const { _id, name, img, description, minimumQuantity, availableQuantity, price } = product;
    return (

        <div className="card  bg-base-100 shadow-xl">
            <figure><img className="p-12" src={img} alt="" /></figure>
            <div className="card-body decoration-from-font">
                <div>
                    <hr />
                </div>
                <h2 className="card-title text-secondary">{name}</h2>
                <p className='card-title text-xs'>{description}</p>
                <h6 className='card-title '><span className='text-secondary'>Minimum Quantity:</span> $ {minimumQuantity}</h6>
                <h6 className='card-title '><span className='text-secondary'>Available Quantity:</span> $  {availableQuantity}</h6>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;