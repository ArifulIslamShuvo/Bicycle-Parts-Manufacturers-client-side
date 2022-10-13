import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import icon from "../../images/alchemy-bikes-logo-gold.png"

const Navber = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        navigate('/');
    };

    if (loading) {
        return <Loading />
    }

    const menuItems = <>
        <li><Link className='font-bold mr-2' to="/">Home</Link></li>
        <li><Link className='font-bold mr-2' to="/blog">Blog</Link></li>
        <li><Link className='font-bold mr-2' to="/portfolio">My-Portfolio</Link></li>
        {
            user && <li><Link className='font-bold mr-2' to="/dashboard">Dashboard</Link></li>
        }
        {
            user
                ?
                <button className='btn btn-secondary ml-1 text-white' onClick={logout}>Logout</button>
                :
                <li><Link className='font-bold mr-2 text-xl' to="/login">Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-[#01151F] px-12 sticky top-0">
            <div className="navbar-start ">
                <div className="dropdown text-white text-xl">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
               <img src={icon} className="w-40" alt='' />
            </div>
            <div className="navbar-center hidden lg:flex text-white text-xl">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navber;