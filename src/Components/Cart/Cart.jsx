import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    /* 
    * COnditionals Rendaring
    * Use if/else to set a variable that will contain an elements, components or anything
    * USe Ternary condition ? 'true' : false
    * Logical && (if the condition is true then the next things will be displayed)
    * Logical || (if the condition is false then the next things wil be displayed)
    */

    /* 
    * CONDITIONAL CSS Class
    *
    *
    *
    */

    // Conditional Rendaring
    let message;
    if(cart.length === 0) {
        message = <p>Please add some Product</p>
    }
    return (
        <div>
            <p className={`red ${cart.length === 3 ? 'bold' : 'underline'}`}>My text</p>
            Cart Item: {cart.length}
            {message}
            {cart.length > 1 ? <span> borolox</span> : <span>Fikira</span> }
            <p>{cart.length > 0 && <span>Wow &&</span> }</p>
            {
                cart.map(pd => <p className={cart.length === 2 ? 'red' : 'blue'}
                    key={pd._id}
                > {pd.name} <button
                    onClick={
                        () => handleRemoveFromCart(pd._id)
                    }>X</button> </p>)
            }
            <p>{cart.length > 5 || <span>Sala Fokira ||</span> }</p>
        </div>
    );
};

export default Cart;