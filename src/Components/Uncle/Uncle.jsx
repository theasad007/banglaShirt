import React, { useContext } from 'react';
import Counsin from '../Cousin/Counsin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='grandpa-tree'>
            <h2>Uncle</h2>
            <p><small>Grandpa Money: {money}</small></p>
            <section className='flex'>
                <Counsin>Riya</Counsin>
                <Counsin>Ali</Counsin>
            </section>
        </div>
    );
};

export default Uncle;