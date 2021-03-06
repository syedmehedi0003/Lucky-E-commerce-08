import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name, img, } = props.data;
    // console.log(props.data.name)

    return (
        <div>
            <div className='cart-info'>
                <img src={img} alt="" />
                <h6 className='item-name'>{name}</h6>
                <button className='delete' onClick={() => props.removeItem(props.data)}>Remove</button>
            </div>

            <div>

            </div>
        </div>


    );
};

export default Cart;