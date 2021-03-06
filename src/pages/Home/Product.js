import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, minimumQuantity, availableQuantity, price } = product;
    const navigate = useNavigate();

    const navigateProduct = id => {
        navigate(`product/${id}`);
    }

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
                    <button className="btn btn-outline btn-success btn-sm btn-ctnter"
                    onClick={() =>navigateProduct (_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;