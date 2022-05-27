import React, { useEffect, useState } from 'react';

const useParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('https://mighty-oasis-11967.herokuapp.com/partses')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])

    return [parts, setParts];
};

export default useParts;
