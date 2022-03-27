import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Your Selected Rides Are</h2>
            <div className='cart-info'>
                {
                    <><img src={props.getPic} alt="" /><p>{props.getItem}</p></>
                }
            </div>
        </div>
    );
};

export default Cart;