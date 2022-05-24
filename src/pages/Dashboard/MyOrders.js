import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }

    }, [user]);

    return (
        <div>
            <h2>My Order {orders.length}</h2>
            <div class="overflow-x-auto">
        <table class="table w-full">
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
            {orders.map((order, index) => (
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

export default MyOrders;