import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const teacher of cart) {
        total = total + teacher.salary
    
    }
    let name = "  " ;
    for (const teacher of cart) {
        name=name +teacher.name
    }
    return (
        <div className='cart'>
             
                 
            <h4>Teacher:{props.cart.length}</h4>
            <p>Withdrow Total:{total}</p>
            <p>{ name} </p> <br />
        </div>
    );
};

export default Cart;