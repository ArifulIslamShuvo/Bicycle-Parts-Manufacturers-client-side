import React, { useEffect, useState } from 'react';
import Product from './Product';
import bgImg from '../../images/banner300.jpg'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/partses')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const sixiproducts = products.slice(0, 6);

    return (
        <div className='px-12 py-10'>

            <h2 className='text-4xl text-secondary font-bold text-center my-12'>Available Bicycle parts </h2>
        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    sixiproducts.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;