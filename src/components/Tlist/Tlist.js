import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../Teacher/Teacher';
import './Tlist.css'
const Tlist = () => {
    const [tlist, setTlist] = useState([]);
    const [cart, setCart] =useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
        .then(data => setTlist(data))
    }, [])
    const handelAddToCart = (teacher) => {
        const newCart = [...cart, teacher];
        setCart(newCart)
    }
    return (
        <div>
            <div className='Tlist-container'>
                <div className='teachers'>
                   
                    {
                        tlist.map(teacher => <Teacher
                            key={teacher.id}
                            teacher={teacher}
                        handelAddToCart={handelAddToCart}
                        ></Teacher>)
                    }
                </div>
                <div className='cart-container'>
                   <Cart cart={cart}></Cart>
                    
                </div>
            </div>
        </div>
    );
};

export default Tlist;