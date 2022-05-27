import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import useParts from '../../hooks/useParts';

const ManageDeletModal = ({ deletProduct }) => {
    const { _id, name } = deletProduct;
    const [parts, setParts] = useParts();


    const deletModal = (id) => {
            const url = `http://localhost:5000/partses/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    const remaining = parts.filter(iems => iems._id !== id);
                    setParts(remaining);

                    if (result) {
                        toast.success("Delet successfully!");
                    } 
                })
        };


    return (
        <div>
            <input type="checkbox" id="delet-product-modual" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="delet-product-modual" className="btn btn-sm btn-circle btn-secondary absolute right-2 top-2 text-white">✕</label>
                    <h3 className="font-bold text-md text-secondary">deletfor: {name} </h3>

                    {/* <form onSubmit={deletModal} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form> */}
                    <button onClick={() => deletModal(_id)} className="btn btn-sm w-100 px-10 mt-12 btn-error rounded-2xl text-white bg-secondary">DELET</button>

                </div>
            </div>
        </div>
    );
};

export default ManageDeletModal;