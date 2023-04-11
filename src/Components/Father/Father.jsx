import React from 'react';
import Me from '../Me/Me';
import Brother from '../Brother/Brother';

const Father = ({ring}) => {
    return (
        <div className='grandpa-tree'>
            <h2>Father</h2>
            <section className='flex'>
                <Brother></Brother>
                <Me ring={ring}></Me>
            </section>
        </div>
    );
};

export default Father;