import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { getItem } = props;

    return (
        <div>
            <h2>Your Selected Rides Are</h2>
            <div>
                <ul className='ul-style'>
                    {
                        getItem?.map(item => <li>
                            <img src={item.pic} alt="" />
                            <span>{item.cartItem}</span>
                        </li>)
                    }
                </ul>
            </div>
            <p><button onClick={props.removeAll} className="removeAll">Remove All</button></p>
        </div>
    );
};

export default Cart;