import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';



const Home = () => {
    const tshirtsData = useLoaderData();
    const [cart, setCart] = useState([]);
    console.log(tshirtsData)

    const handleAddToCart = (tshirt) => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist) {
            toast('This Product is already in cart');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }
    }

    const handleRemoveFromCart = (_id) => {
        const remaining = cart.filter(pd => pd._id !== _id);
        setCart(remaining)
        console.log(_id)
    }


    return (
        <div className='home-wrap'>
            <div className="shop-wrap">
                {
                    tshirtsData.map(product => <Tshirt key={product._id} product={product} handleAddToCart={handleAddToCart}></Tshirt>)
                }
            </div>
            <div className="cart-wrap">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;