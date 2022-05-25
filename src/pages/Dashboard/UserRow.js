import React from 'react';

const UserRow = ({user}) => {
    const {email} = user;
    console.log(user);
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>at</td>
            <td>at</td>
        </tr>
    );
};

export default UserRow;