import React from 'react';
import './Rider.css';

const Rider = (props) => {
    // console.log(props)
    const { img, name, price, company } = props.rider;
    return (
        <div className='ride-container'>
            <img src={img} alt="" />
            <div className="info">
                <h2>Name: {name}</h2>
                <p>Price: {price}</p>
                <p>Company: {company}</p>
            </div>
            <button onClick={() => props.AddToCart(name, img)} className='shop-btn'>ADD TO CART</button>
        </div>
    );
};

export default Rider;