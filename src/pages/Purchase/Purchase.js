import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();

    const [parts, setParts] = useState({});
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        const url = ``
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data));

    }, [id]);

    return (
        <div>
            <h2>parts</h2>
        </div>
    );
};

export default Purchase;