import React,{useEffect, useState} from 'react';
import bg from '../../images/up.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleUpdatePrifile = event => {
        event.preventDefault();
        const userName = user?.displayName;
        const email = user?.email;
        const education = event.target.education.value;
        const location = event.target.location.value;
        const city = event.target.city.value;
        const phone = event.target.phone.value;
        const linkedIn = event.target.linkedIn.value;

        const upfateInfo = { userName, email, education, location, city, phone, linkedIn};
        console.log(upfateInfo);

        fetch(`https://mighty-oasis-11967.herokuapp.com/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(upfateInfo)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data', data);
                toast.success('Update successful')
                event.reset();
            })
    }
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen overflow-hidden">
            <div className="hero-content px-12">
                <div className="card max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdatePrifile}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-left text-2xl font-bold text-secondary px-10">Please update your info</span>
                                </label>
                                <input type="text" name='name' readOnly value={user?.displayName} className="input input-bordered input-secondary w-full max-w-lg mt-2" />
                                <input type="text" name='email' readOnly value={user?.email} className="input input-bordered input-secondary w-full max-w-lg mt-2" />
                                <input type="text" name='education' placeholder='Education' className="input input-bordered input-secondary w-full max-w-lg mt-2" />
                                <input type="text" name='location' placeholder='Location' className="input input-bordered input-secondary w-full max-w-lg mt-2" />
                                <input type="text" name='city' placeholder='(City/District)' className="input input-bordered input-secondary w-full max-w-lg mt-2" />
                                <input type="text" name='phone' placeholder='phone' className="input input-bordered input-secondary w-full max-w-lg mt-2" />
                                <input type="text" name='linkedIn' placeholder='LinkedIn profile link' className="input input-bordered input-secondary w-full max-w-lg mt-2" />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-success">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;