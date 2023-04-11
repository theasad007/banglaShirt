import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {

    return (
        <div>
            Cart Item: {cart.length}
            {
                cart.map(pd => <p
                    key={pd._id}
                > {pd.name} <button
                    onClick={
                        () => handleRemoveFromCart(pd._id)
                    }>X</button> </p>)
            }
        </div>
    );
};

export default Cart;