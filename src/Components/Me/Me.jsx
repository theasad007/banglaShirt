import React from 'react';
import Special from '../Special/Special';

const Me = ({ring}) => {
    return (
        <div>
            <h2>Me</h2>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Me;