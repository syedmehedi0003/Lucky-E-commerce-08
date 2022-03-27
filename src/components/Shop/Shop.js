import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {

    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);
    // const [remove, setRemove] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])



    const addToCart = (product) => {

        const existsItem = cart.filter(item => item.id === product.id);
        if (existsItem.length) {
            return alert('Already added item');
        }

        const newCart = [...cart, product];
        setCart(newCart);

        if (newCart.length == 4) {
            return alert('You can not add more then 4 items');
        }
        // const removeCart = (deleteCart) => {
        //     const remove = cart.filter(item => item.id !== deleteCart.id);
        //     setCart(remove);
        //     newCart = [];
        //     removeCart();
        // }


    }

    const removeItem = (deleteItem) => {
        const remove = cart.filter(item => item.id !== deleteItem.id);
        setCart(remove);
    }

    const randomSelect = () => {
        const number = Math.floor(Math.random() * 100);
        const randomPc = cart.filter(item => item.id === number);
        if (randomPc.length === 0) {
            randomSelect();
        }
        else {
            setCart(randomPc);
        }
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <div>
                    <h3>Selected Items</h3>
                    {
                        cart.map(data => <Cart key={data.id} data={data}
                            removeItem={removeItem}
                            randomSelect={randomSelect}

                        // removeCart={removeCart}

                        />)

                    }

                </div>
                <button className='chose' onClick={() => randomSelect()}> Choose 1 for me</button>

                <button className='chose'>Chose again</button>
            </div>
        </div>
    );
};

export default Shop;