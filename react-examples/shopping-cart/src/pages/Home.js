import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    function addTocart(product) {
        let newCart = props.cart.slice(0);
        newCart.push(product);
        props.setCart(newCart);
    }

    return (
        <div>
            <h1>Welcome to our store</h1>

            <p>You have {props.cart.length} number of items in your cart</p>
            <p>
                <Link to="/cart">
                    Go to your cart
                </Link>
            </p>

            <div className="products">
                {props.products.map(function(product) {
                    return (
                        <div className="product">
                            <img src={product.imageUrl} />
                            <h2>{product.name}</h2>
                            <p>${product.price}</p>
                            <button onClick={() => addTocart(product)}>Add to cart</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;