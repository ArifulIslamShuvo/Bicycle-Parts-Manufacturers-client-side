import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageAllOrders = () => {
    const { data: allOrders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/allorders', {
        method: 'GET',

    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2>manage All Orders{allOrders.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Parts Name</th>
                            <th>Per Unit Price </th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allOrders.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{order.userName}</td>
                                <td>{order.userEmail}</td>
                                <td>{order.partsName}</td>
                                <td>$ {order.PerUnitPrice}</td>
                                <td>{order.quantity}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
       
    );
};

export default ManageAllOrders;
