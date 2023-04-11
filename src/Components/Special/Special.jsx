import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const GoldRIng = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <h3>{GoldRIng}</h3>
        </div>
    );
};

export default Special;