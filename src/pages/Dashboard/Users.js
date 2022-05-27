import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://mighty-oasis-11967.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className="text-center text-xl font-bold text-rose-500 mt-4">All Users :{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Role</th>
                            <th>Delet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow 
                            index={index}
                             key={user._id} 
                             user={user}
                             refetch={refetch}
                             ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Users;