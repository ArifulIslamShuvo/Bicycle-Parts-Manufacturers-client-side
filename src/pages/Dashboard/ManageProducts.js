import React, { useEffect, useState } from 'react';
import useParts from '../../hooks/useParts';
import ManageDeletModal from './ManageDeletModal';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [parts, setParts] = useParts();
    const [deletProduct, setDeletProduct] = useState(null);
    return (
        <div>
            <div className='px-12 py-10'>

                <h2 className='text-4xl text-orange-500 font-bold text-center my-12'>Manage All Product </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        parts.map(product => <ManageProduct
                            key={product._id}
                            product={product}
                            setDeletProduct={setDeletProduct}
                            ></ManageProduct>)
                    }
                </div>
                {
                    deletProduct && <ManageDeletModal deletProduct={deletProduct} setParts={setParts}></ManageDeletModal>
                }
            </div>
        </div>
    );
};

export default ManageProducts;