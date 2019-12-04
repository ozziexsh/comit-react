import React from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
    function removeFromCart(product) {
        let newCart = props.cart.slice(0);
        // loop through the newCart
        for (let i = 0; i < newCart.length; i++) {
            // find the id in newCart that matches product
            let currentCartItem = newCart[i];
            if (product.id === currentCartItem.id) {
                // remove that item from the newCart
                newCart.splice(i, 1);
                break;
            }
        }
        // update the cart to be equal to newCart
        props.setCart(newCart);
    }

    let cartTotal = 0;
    for (let product of props.cart) {
        cartTotal = cartTotal + product.price;
    }

    return (
        <div>
            <h1>Your cart</h1>
            <p>
                <Link to="/">
                    Go home
                </Link>
            </p>

            {props.cart.map(function(product) {
                return (
                    <div className="cart-row">
                        <img src={product.imageUrl} />
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <button onClick={() => removeFromCart(product)}>Remove</button>
                    </div>
                )
            })}

            <h2>Your total is: ${cartTotal}</h2>
        </div>
    )
}

export default Cart;