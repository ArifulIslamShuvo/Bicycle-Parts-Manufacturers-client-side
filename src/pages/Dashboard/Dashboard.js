import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile mt-3">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-cyan-400 text-center'>Welcome to your Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='/dashboard/'><button class="mt-3 btn-success btn btn-sm">My Orders</button></Link></li>
                    <li><Link to='/dashboard/userreview'><button class="mt-3 btn-success btn btn-sm">User Reviews</button></Link></li>
                    

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;