import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {

    const { product, addToCart } = props;
    const { id, name, img, price, brand } = product;


    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="" />
                <p>ID: {id}</p>
                <h4>Name:{name}</h4>
                <h5>Brand: {brand} </h5>
                <h6>Price: {price}</h6>
            </div>
            <button onClick={() => addToCart(product)} className='btn-cart'><p>AddToCart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;