import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Rider from '../Rider/Rider';
import './Shop.css'

const Shop = () => {
    const [riders, setRiders] = useState([]);
    const [getItem, setGetItem] = useState([]);
    const [getPic, setGetPic] = useState([]);
    const AddToCart = (cartItem, pic) => {
        console.log(cartItem, pic);
        setGetItem(cartItem);
        setGetPic(pic);
    }
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRiders(data));
    }, [])
    return (
        <div className='container'>
            <div className="shop">
                {
                    riders.map(rider => <Rider key={rider.id} rider={rider} AddToCart={AddToCart}></Rider>)
                }
            </div>
            <div className="cart">
                <h1>This is cart</h1>
                <Cart getItem={getItem} getPic={getPic}></Cart>
            </div>
        </div>
    );
};

export default Shop;