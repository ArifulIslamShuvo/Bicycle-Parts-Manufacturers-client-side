import React, { useEffect, useState } from 'react';

const useParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/partses')
        .then(res => res.json())
        .then(data => setParts())
    },[])

    return [parts, setParts];
};

export default useParts;