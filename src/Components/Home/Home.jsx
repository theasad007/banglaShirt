import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirtsData = useLoaderData();
    console.log(tshirtsData)
    return (
        <div>
            tShirt is {tshirtsData.length}
        </div>
    );
};

export default Home;