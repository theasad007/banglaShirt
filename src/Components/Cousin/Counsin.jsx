import React from 'react';
import Friend from '../Friend/Friend';

const Counsin = ({children, hasFriend}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{children}</p>
            { hasFriend && <Friend></Friend>}
        </div>
    );
};

export default Counsin;