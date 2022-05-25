import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?userEmail=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          console.log('res', res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
          }
          return res.json()
        })
        .then(data => {
          setOrders(data);
        });
    }

  }, [user,navigate]);

  return (
    <div>
      <h2>My Order {orders.length}</h2>
      <div className="overflow-x-auto">
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