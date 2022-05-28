import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile mt-3 mx-2">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-cyan-400 text-center mb-3'>Welcome to your Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="p-6 mt-12 overflow-y-auto  bg-base-100 text-base-content">

                    {!admin &&
                        <>
        
                            <li><Link to='/dashboard/userreview'><button className="mt-3 btn-success btn btn-xs">Add Review</button></Link></li>
                            <li><Link to='/dashboard/MyOrders'><button className="mt-3 btn-success btn btn-xs">MyOrders</button></Link></li>
                        </>
                    }
                    <li><Link to='/dashboard/'><button className="mt-3 btn-success btn btn-xs">My Profile</button></Link></li>
                   
                    {admin &&
                        <>
                            <li><Link to='/dashboard/manageproducts'><button className="mt-3 btn-success btn btn-xs">Manage Products</button></Link></li>
                            <li><Link to='/dashboard/manageallorders'><button className="mt-3 btn-success btn btn-xs">Manage All Orders</button></Link></li>
                            <li><Link to='/dashboard/addproduct'><button className="mt-3 btn-success btn btn-xs">Add Product</button></Link></li>
                            <li><Link to='/dashboard/users'><button className="mt-3 btn-success btn btn-xs">All Users</button></Link></li>
                        </>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;