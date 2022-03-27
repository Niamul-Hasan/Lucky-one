import React from 'react';
import './Bonous.css';

const Bonous = () => {
    return (
        <div className='bonous'>
            <h1>What is the Difference between props and state?</h1>
            <p>Props are read-only but state can be changed. It means that props are used to pass value from one component to another component where state holds the information of the component.Furthermore props can be accessed by the child component but state can not be accessed by any child component. </p>
        </div>
    );
};

export default Bonous;