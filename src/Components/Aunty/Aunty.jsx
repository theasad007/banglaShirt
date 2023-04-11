import React, { useContext } from 'react';
import Counsin from '../Cousin/Counsin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div className='grandpa-tree'>
            <h2>Aunty</h2>
            <p><small>Grandpa Money: {money}</small></p>
            <section className='flex'>
                <Counsin>Abir</Counsin>
                <Counsin hasFriend={true}>Nibir</Counsin>
            </section>
        </div>
    );
};

export default Aunty;