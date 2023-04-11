import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext('Gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';

    const [money, setMoney] = useState(0);

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Has Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Send 1000 TK</button>

            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Golden RIng'>
                    <section className='family'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;



/* 
* Create a Context and EXport It
* Create a Provider and Pass Value
* useContect to received the value

*/