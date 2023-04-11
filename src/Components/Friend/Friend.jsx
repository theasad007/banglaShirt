import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>Friend</h2>
            <p>{ring}</p>
        </div>
    );
};

export default Friend;