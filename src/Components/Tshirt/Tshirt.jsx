import React from 'react';
import './Tshirt.css'

const Tshirt = ({product, handleAddToCart}) => {
    const {_id, name, picture, price} = product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(product)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;